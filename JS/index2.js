const points=[175,129,126,111,102,77,50,46,39,18,16,15,15,13,11,5,3,3,0,0,0]

var data=[
  {Codigo:"cod1",
  nombre:"Carlos Sainz",
  equipo:"Ferrari",
  PTS:"102",
  },
  {Codigo:"cod2",
  nombre:"Charles Lecrerc",
  equipo:"Ferrari",
  PTS:"126"
  },
  {Codigo:"cod3",
  nombre:"Max Verstappen",
  equipo:"Red Bull",
  PTS:"175"
  },
  {Codigo:"cod4",
  nombre:"Checo Perez",
  equipo:"Red Bull",
  PTS:"129"
  },
  {Codigo:"cod5",
  nombre:"Lando Norris",
  equipo:"Mclaren",
  PTS:"50"
  },
  {Codigo:"cod6",
  nombre:"Daniel Ricciardo",
  equipo:"Mclaren",
  PTS:"15"
  },
  {Codigo:"cod7",
  nombre:"Fernando Alonso",
  equipo:"Alpine",
  PTS:"18"
  },
  {Codigo:"cod8",
  nombre:"Esteban Ocon",
  equipo:"Alpine",
  PTS:"39"
  },
  {Codigo:"cod9",
  nombre:"Kevin Maggnussen",
  equipo:"Haas",
  PTS:"15"
  },
  {Codigo:"cod10",
  nombre:"Mick Schumacher",
  equipo:"Haas",
  PTS:"0"
  },
  {Codigo:"cod11",
  nombre:"Lewis Hamilton",
  equipo:"Mercedes",
  PTS:"77"
  },
  {Codigo:"cod12",
  nombre:"George Russell",
  equipo:"Mercedes",
  PTS:"111"
  },
  {Codigo:"cod13",
  nombre:"Yuki Tsunoda",
  equipo:"Alpha Tauri",
  PTS:"11"
  },
  {Codigo:"cod14",
  nombre:"Pierre Gasly",
  equipo:"Alpha Tauri",
  PTS:"16"
  },
  {Codigo:"cod15",
  nombre:"Valtteri Bottas",
  equipo:"Alfa Romeo",
  PTS:"46"
  },
  {Codigo:"cod16",
  nombre:"Zhou Gaunyu",
  equipo:"Alfa Romeo",
  PTS:"5"
  },
  {Codigo:"cod17",
  nombre:"Nicholas Latifi",
  equipo:"Williams",
  PTS:"0"
  },
  {Codigo:"cod18",
  nombre:"Alexander Albon",
  equipo:"Williams",
  PTS:"3"
  },
  {Codigo:"cod19",
  nombre:"Sebastian Vettel",
  equipo:"Aston Martin",
  PTS:"13"
  },
  {Codigo:"cod20",
  nombre:"Lance Stroll",
  equipo:"Aston Martin",
  PTS:"3"
  },
]
if ( document.getElementById( "idtabla" )) {
  //la tabla tiene un encabezado fijo
cad=`
    <p class="h1">Corredores F1<p>
    <table class="table table-hover table-dark">
      <tr>
        <th>Nombre</th>
        <th>Equipo</th>
        <th>PTS</th>
      </tr>
  `
//y ademas tiene un contenido que varia segun su data
for (var i=0; i<data.length; i++) {
    cad+= `
        <tr>
            <td>${data[i].nombre}</td>
            <td>${data[i].equipo}</td>
            <td>${data[i].PTS}</td>
        </tr>
        `
}
  //le agrego el cierre de la etiqueta table
cad+=`
    </table> 
    `
document.getElementById("idtabla").innerHTML = cad;
}
