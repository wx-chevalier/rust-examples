use hyper::status::StatusCode::{NotFound, BadRequest};
use request::Request;
use middleware::{ErrorHandler, Action, Halt};
use nickel_error::NickelError;
use std::io::Write;

#[derive(Clone, Copy)]
pub struct DefaultErrorHandler;

impl<D> ErrorHandler<D> for DefaultErrorHandler {
    fn handle_error(&self, err: &mut NickelError<D>, _req: &mut Request<D>) -> Action {
        if let Some(ref mut res) = err.stream {
            let msg : &[u8] = match res.status() {
                NotFound => b"Not Found",
                BadRequest => b"Bad Request",
                _ => b"Internal Server Error"
            };

            let _ = res.write_all(msg);
        } else {
            println!("Error: {}", err.message);
        }

        Halt(())
    }
}
