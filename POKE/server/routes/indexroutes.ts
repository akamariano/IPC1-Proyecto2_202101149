import { Router } from 'express';
const usuarios =[

    {
        user: "202101149",
        password: "123"
    },
    {
        user: "IPC1B",
        password: "Prueba123"
    },
    {
        user: "IPC1F",
        password: "Prueba456"
    }
]
const pokes =[

    {
        nombre: "Squirtle",
        no:"007",
        tipo:"Agua" ,
        ataque:"Torrente",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        fondo:"text-white bg-primary mb-3"
    },
    {
        nombre: "Psyduck",
        no:"054",
        tipo:"Agua" ,
        ataque:"Humedad",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png",
        fondo:"text-white bg-primary mb-3"
    },
    {
        nombre: "Wartortle",
        no:"065",
        tipo:"Agua" ,
        ataque:"Torrente",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
        fondo:"text-white bg-primary mb-3"
    }
    ,
    {
        nombre: "Blastoise",
        no:"009",
        tipo:"Agua" ,
        ataque:"Torrente",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        fondo:"text-white bg-primary mb-3"
        
    },
    {
        nombre: "Poliwag",
        no:"060",
        tipo:"Agua" ,
        ataque:"Hidrochorro Water Sport",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
        fondo:"text-white bg-primary mb-3"
        
    },
    {
        nombre: "Charmander",
        no:"004",
        tipo:"Fuego" ,
        ataque:"Lanzallamas",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        fondo:"card text-white bg-danger mb-3"
        
    },
    {
        nombre: "Charizard",
        no:"006",
        tipo:"Fuego" ,
        ataque:"Giro Fuego",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        fondo:"card text-white bg-danger mb-3"
        
    },
    {
        nombre: "Charmeleon",
        no:"005",
        tipo:"Fuego" ,
        ataque:"Mar Llamas",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
        fondo:"card text-white bg-danger mb-3"
        
    },
    {
        nombre: "Ninetales",
        no:"038",
        tipo:"Fuego" ,
        ataque:"Ascuas Ember",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
        fondo:"card text-white bg-danger mb-3"
        
    },
    {
        nombre: "Growlithe",
        no:"058",
        tipo:"Fuego" ,
        ataque:"Ataque envuelto en fuego",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
        fondo:"card text-white bg-danger mb-3"
        
    },
    {
        nombre: "Bulbasaur",
        no:"001",
        tipo:"Hierba" ,
        ataque:"Bomba Lodo",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        fondo:"text-white bg-success mb-3"
        
    },
    {
        nombre: "Oddish",
        no:"043",
        tipo:"Hierba" ,
        ataque:"Sweet Scent",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
        fondo:"text-white bg-success mb-3"
        
    },
    {
        nombre: "Paras",
        no:"046",
        tipo:"Hierba" ,
        ataque:"Efecto Espóra",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png",
        fondo:"text-white bg-success mb-3"
        
    },
    {
        nombre: "Exeggutor",
        no:"103",
        tipo:"Hierba" ,
        ataque:"Semilladora",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
        fondo:"text-white bg-success mb-3"
        
    },
    {
        nombre: "Victreebel",
        no:"071",
        tipo:"Hierba" ,
        ataque:"Hoja Afilada",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png",
        fondo:"text-white bg-success mb-3"
        
    }
    
]
const psyduck =[

    {
        nombre: "Psyduck",
        no:"054",
        tipo:"Agua" ,
        ataque:"Humedad",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png",
        fondo:"text-white bg-primary mb-3"
        
    }
]

const fuego =[
    {
        nombre: "Charmander",
        no:"004",
        tipo:"Fuego" ,
        ataque:"Lanzallamas",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        fondo:"card text-white bg-danger mb-3"
        
    },
    {
        nombre: "Charizard",
        no:"006",
        tipo:"Fuego" ,
        ataque:"Giro Fuego",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        fondo:"card text-white bg-danger mb-3"
        
    },
    {
        nombre: "Charmeleon",
        no:"005",
        tipo:"Fuego" ,
        ataque:"Mar Llamas",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
        fondo:"card text-white bg-danger mb-3"
        
    },
    {
        nombre: "Ninetales",
        no:"038",
        tipo:"Fuego" ,
        ataque:"Ascuas Ember",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
        fondo:"card text-white bg-danger mb-3"
        
    },
    {
        nombre: "Growlithe",
        no:"058",
        tipo:"Fuego" ,
        ataque:"Ataque envuelto en fuego",
        foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
        fondo:"card text-white bg-danger mb-3"
        
    }
]
const squirtle=[
{
    nombre: "Squirtle",
    no:"007",
    tipo:"Agua" ,
    ataque:"Torrente",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    fondo:"text-white bg-primary mb-3"
}
]

const wartortle=[
{
    nombre: "Wartortle",
    no:"065",
    tipo:"Agua" ,
    ataque:"Torrente",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
    fondo:"text-white bg-primary mb-3"
}
]
const Blastoise=[
{
    nombre: "Blastoise",
    no:"009",
    tipo:"Agua" ,
    ataque:"Torrente",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    fondo:"text-white bg-primary mb-3"
    
}
]
const Poliwag=[
{
    nombre: "Poliwag",
    no:"060",
    tipo:"Agua" ,
    ataque:"Hidrochorro Water Sport",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
    fondo:"text-white bg-primary mb-3"
    
}

]
const Charmander=[
{
    nombre: "Charmander",
    no:"004",
    tipo:"Fuego" ,
    ataque:"Lanzallamas",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    fondo:"card text-white bg-danger mb-3"
    
}
]
const Charizard=[
{
    nombre: "Charizard",
    no:"006",
    tipo:"Fuego" ,
    ataque:"Giro Fuego",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    fondo:"card text-white bg-danger mb-3"
    
}
]
const charmaleon=[
{
    nombre: "Charmeleon",
    no:"005",
    tipo:"Fuego" ,
    ataque:"Mar Llamas",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    fondo:"card text-white bg-danger mb-3"
    
}
]
const Ninetales=[
{
    nombre: "Ninetales",
    no:"038",
    tipo:"Fuego" ,
    ataque:"Ascuas Ember",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
    fondo:"card text-white bg-danger mb-3"
    
}
]
const growlithe=[
{
    nombre: "Growlithe",
    no:"058",
    tipo:"Fuego" ,
    ataque:"Ataque envuelto en fuego",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
    fondo:"card text-white bg-danger mb-3"
    
}
]
const bulbasaur=[
{
    nombre: "Bulbasaur",
    no:"001",
    tipo:"Hierba" ,
    ataque:"Bomba Lodo",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    fondo:"text-white bg-success mb-3"
    
}
]
const oddish=[
{
    nombre: "Oddish",
    no:"043",
    tipo:"Hierba" ,
    ataque:"Sweet Scent",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
    fondo:"text-white bg-success mb-3"
    
}
]
const paras=[
{
    nombre: "Paras",
    no:"046",
    tipo:"Hierba" ,
    ataque:"Efecto Espóra",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png",
    fondo:"text-white bg-success mb-3"
    
}
]
const Exeggutor=[
{
    nombre: "Exeggutor",
    no:"103",
    tipo:"Hierba" ,
    ataque:"Semilladora",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
    fondo:"text-white bg-success mb-3"
    
}
]
const Victreebel=[
{
    nombre: "Victreebel",
    no:"071",
    tipo:"Hierba" ,
    ataque:"Hoja Afilada",
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png",
    fondo:"text-white bg-success mb-3"
    
}
]
const agua=[
    
        {
            nombre: "Squirtle",
            no:"007",
            tipo:"Agua" ,
            ataque:"Torrente",
            foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
            fondo:"text-white bg-primary mb-3"
        }
        ,
        {
            nombre: "Wartortle",
            no:"065",
            tipo:"Agua" ,
            ataque:"Torrente",
            foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
            fondo:"text-white bg-primary mb-3"
        }
        ,
        {
            nombre: "Blastoise",
            no:"009",
            tipo:"Agua" ,
            ataque:"Torrente",
            foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
            fondo:"text-white bg-primary mb-3"
            
        }
        
        ,
        {
            nombre: "Psyduck",
            no:"054",
            tipo:"Agua" ,
            ataque:"Humedad",
            foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png",
            fondo:"text-white bg-primary mb-3"
        },
        {
            nombre: "Poliwag",
            no:"060",
            tipo:"Agua" ,
            ataque:"Hidrochorro Water Sport",
            foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
            fondo:"text-white bg-primary mb-3"
            
        }
]
const Hierba=[
        {
            nombre: "Bulbasaur",
            no:"001",
            tipo:"Hierba" ,
            ataque:"Bomba Lodo",
            foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
            fondo:"text-white bg-success mb-3"
            
        }
        ,
        {
            nombre: "Oddish",
            no:"043",
            tipo:"Hierba" ,
            ataque:"Sweet Scent",
            foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
            fondo:"text-white bg-success mb-3"
            
        },
        
        {
            nombre: "Paras",
            no:"046",
            tipo:"Hierba" ,
            ataque:"Efecto Espóra",
            foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png",
            fondo:"text-white bg-success mb-3"
            
        },
        
       
        {
            nombre: "Exeggutor",
            no:"103",
            tipo:"Hierba" ,
            ataque:"Semilladora",
            foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
            fondo:"text-white bg-success mb-3"
            
        },
        
        
        {
            nombre: "Victreebel",
            no:"071",
            tipo:"Hierba" ,
            ataque:"Hoja Afilada",
            foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png",
            fondo:"text-white bg-success mb-3"
            
        }
]
class IndexRouter{
    public router : Router = Router();
    constructor() {
        
        this.config();
    }
    config() {
        
        this.router.get('/hola', (req, res) => res.send("Hola Mundo"));
        this.router.get('/pokeTodos', (req, res) => {
            res.send(pokes);
        })
        
        this.router.get('/users', (req, res) => {
            res.send(usuarios);
        })
        this.router.get('/psyduck', (req, res) => {
            res.send(psyduck);
        });
        this.router.get('/054', (req, res) => {
            res.send(psyduck);
        });
        this.router.get('/squirtle', (req, res) => {
            res.send(squirtle);
        });
        this.router.get('/007', (req, res) => {
            res.send(squirtle);
        });
        this.router.get('/wartortle', (req, res) => {
            res.send(wartortle);
        });
        this.router.get('/065', (req, res) => {
            res.send(wartortle);
        });
        this.router.get('/blastoise', (req, res) => {
            res.send(Blastoise);
        });
        this.router.get('/009', (req, res) => {
            res.send(Blastoise);
        });
        this.router.get('/poliwag', (req, res) => {
            res.send(Poliwag);
        });
        this.router.get('/060', (req, res) => {
            res.send(Poliwag);
        });
        this.router.get('/paras', (req, res) => {
            res.send(paras);
        });
        this.router.get('/046', (req, res) => {
            res.send(paras);
        });
        this.router.get('/exeggutor', (req, res) => {
            res.send(Exeggutor);
        });
        this.router.get('/103', (req, res) => {
            res.send(Exeggutor);
        });
        this.router.get('/victreebel', (req, res) => {
            res.send(Victreebel);
        });
        this.router.get('/071', (req, res) => {
            res.send(Victreebel);
        });
        this.router.get('/bulbasaur', (req, res) => {
            res.send(bulbasaur);
        });
        this.router.get('/001', (req, res) => {
            res.send(bulbasaur);
        });
        this.router.get('/oddish', (req, res) => {
            res.send(oddish);
        });
        this.router.get('/043', (req, res) => {
            res.send(oddish);
        });
        this.router.get('/charmaleon', (req, res) => {
            res.send(charmaleon);
        });
        this.router.get('/005', (req, res) => {
            res.send(charmaleon);
        });
        this.router.get('/charmander', (req, res) => {
            res.send(Charmander);
        });
        this.router.get('/004', (req, res) => {
            res.send(Charmander);
        });
        this.router.get('/charizard', (req, res) => {
            res.send(Charizard);
        });
        this.router.get('/006', (req, res) => {
            res.send(Charizard);
        });
        this.router.get('/growlithe', (req, res) => {
            res.send(growlithe);
        });
        this.router.get('/058', (req, res) => {
            res.send(growlithe);
        });
        this.router.get('/ninetales', (req, res) => {
            res.send(Ninetales);
        });
        this.router.get('/038', (req, res) => {
            res.send(Ninetales);
        });
        this.router.get('/fuego', (req, res) => {
            res.send(fuego);
        });
        this.router.get('/agua', (req, res) => {
            res.send(agua);
        });
        this.router.get('/hierba', (req, res) => {
            res.send(Hierba);
        });
       
        this.router.get('/poke/:no', (req, res) => {
            //console.log(req);
            const poke = this.obtenerPokemonPorId(req.params.no);
            res.send(poke);
        });
        this.router.get('/pokeNombre/:nombre', (req, res) => {
            const poke1 = this.obtenerPokemonPorNombre(req.params.nombre);
            res.send(poke1);
        });
    }
    obtenerPokemonPorId(no) {
        return pokes.find(dato => dato.no == no);
    }
    obtenerPokemonPorNombre(nombre) {
        return pokes.find(dato => dato.nombre == nombre);
    }
}

const ir= new IndexRouter();
export default ir.router;