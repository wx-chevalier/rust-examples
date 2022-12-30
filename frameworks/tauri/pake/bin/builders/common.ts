import { PakeAppOptions } from '@/types.js';
import prompts from 'prompts';
import path from 'path';
import fs from 'fs/promises';
import { npmDirectory } from '@/utils/dir.js';
import logger from '@/options/logger.js';

export async function promptText(message: string, initial?: string) {
  const response = await prompts({
    type: 'text',
    name: 'content',
    message,
    initial,
  });
  return response.content;
}

export async function mergeTauriConfig(
  url: string,
  options: PakeAppOptions,
  tauriConf: any
) {
  const {
    width,
    height,
    fullscreen,
    transparent,
    resizable,
    identifier,
    name,
  } = options;

  const tauriConfWindowOptions = {
    width,
    height,
    fullscreen,
    transparent,
    resizable,
  };

  Object.assign(tauriConf.tauri.windows[0], { url, ...tauriConfWindowOptions });
  tauriConf.package.productName = name;
  tauriConf.tauri.bundle.identifier = identifier;
  const exists = await fs.stat(options.icon)
    .then(() => true)
    .catch(() => false);
  if (exists) {
    let updateIconPath = true;
    let customIconExt = path.extname(options.icon).toLowerCase();
    if (process.platform === "win32") {
      if (customIconExt === ".ico") {
        const ico_path = path.join(npmDirectory, `src-tauri/png/${name.toLowerCase()}_32.ico`);
        tauriConf.tauri.bundle.resources = [`png/${name.toLowerCase()}_32.ico`];
        await fs.copyFile(options.icon, ico_path);
      } else {
        updateIconPath = false;
        logger.warn(`icon file in Windows must be 256 * 256 pix with .ico type, but you give ${customIconExt}`);
      }
    }
    if (process.platform === "linux") {
      delete tauriConf.tauri.bundle.deb.files;
      if (customIconExt != ".png") {
        updateIconPath = false;
        logger.warn(`icon file in Linux must be 512 * 512 pix with .png type, but you give ${customIconExt}`);
      }
    }

    if (process.platform === "darwin" && customIconExt !== ".icns") {
        updateIconPath = false;
        logger.warn(`icon file in MacOS must be .icns type, but you give ${customIconExt}`);
    }
    if (updateIconPath) {
      tauriConf.tauri.bundle.icon = [options.icon];
    } else {
      logger.warn(`icon file will not change with default.`);
    }
  } else {
    logger.warn("the custom icon path may not exists. we will use default icon to replace it");
  }


  let configPath = "";
  switch (process.platform) {
    case "win32": {
      configPath = path.join(npmDirectory, 'src-tauri/tauri.windows.conf.json');
      break;
    }
    case "darwin": {
      configPath = path.join(npmDirectory, 'src-tauri/tauri.macos.conf.json');
      break;
    }
    case "linux": {
      configPath = path.join(npmDirectory, 'src-tauri/tauri.linux.conf.json');
      break;
    }
  }
  
  let bundleConf = {tauri: {bundle: tauriConf.tauri.bundle}};
  await fs.writeFile(
    configPath,
    Buffer.from(JSON.stringify(bundleConf), 'utf-8')
  );


  const configJsonPath = path.join(npmDirectory, 'src-tauri/tauri.conf.json')
  await fs.writeFile(
    configJsonPath,
    Buffer.from(JSON.stringify(tauriConf), 'utf-8')
  );
}
