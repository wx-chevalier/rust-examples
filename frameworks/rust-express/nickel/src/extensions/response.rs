use {Response, MiddlewareResult};
use hyper::header;
use status::StatusCode;

pub trait Redirect: Sized {
    type Result;

    /// Redirect the response to a given target
    ///
    /// # Examples
    /// ```{rust}
    /// extern crate nickel;
    ///
    /// use nickel::{Nickel, HttpRouter, Request, Response, MiddlewareResult};
    /// use nickel::extensions::Redirect;
    ///
    /// fn redirect<'mw, 'conn>(_: &mut Request<'mw, 'conn>, res: Response<'mw>) -> MiddlewareResult<'mw> {
    ///     return res.redirect("http://nickel.rs")
    /// }
    ///
    /// fn main() {
    ///     let mut server = Nickel::new();
    ///     server.get("/a", redirect);
    /// }
    /// ```
    fn redirect<T>(self, target: T) -> Self::Result
    where T: Into<String> {
        self.redirect_with(target, StatusCode::Found)
    }

    fn redirect_permanently<T>(self, target: T) -> Self::Result
    where T: Into<String> {
        self.redirect_with(target, StatusCode::MovedPermanently)
    }

    fn redirect_with<T>(self, target: T, status: StatusCode) -> Self::Result
    where T: Into<String>;
}

// Todo: rework this to return a Responder so it will work with the
// middleware macro
impl<'a, D> Redirect for Response<'a, D> {
    type Result = MiddlewareResult<'a, D>;

    fn redirect_with<T>(mut self, target: T, status: StatusCode) -> Self::Result
    where T: Into<String> {
        self.set(header::Location(target.into()));

        let code = status.to_u16();
        if code < 300 || code >= 400 {
            self.error(StatusCode::InternalServerError, "redirect_with called with non-3xx status code")
        } else {
            self.send(status)
        }
    }
}
