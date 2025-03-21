import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token : string | null = localStorage.getItem('token');
    console.log(token)
    if(token){
      req = req.clone({
        setHeaders: {'Authorization': token},
      })
    }
    return next.handle(req);
  }

}
