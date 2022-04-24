import express, { Application } from 'express';
import indexroutes from './routes/indexroutes';
import morgan from 'morgan';
import cors from 'cors';

class server{
    public app: Application;
    constructor(){
this.app=express();

this.routes();
this.config();
    }
    //public void config{}{}
    config():void{
        this.app.set('port',3000);
        this.app.use(morgan('dev'));

this.app.use(express.json());
this.app.use(cors());
this.app.use(express.urlencoded({extended:false}));
    }
    routes():void{
this.app.use('/', indexroutes)
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Servidor esta corriendo en el puerto`, this.app.get('port'));
        });
    }
}
const serv = new server();
serv.start();