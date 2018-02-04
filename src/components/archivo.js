function getDistance(a,b,c,d){
    console.log("asi llegan los datos", a,b,c,d);
  let data = [];
  let x = a;
  let y = b;
  let dist = 0;
  let sw = false; // X = true , Y = false
  while(x != c || y != d){
    //paso norte
    if(d - y > 0 && !sw && parseInt(x) == x){
        console.log("norte");
        if ( x != c ){
          let y1 = y;
          if (parseInt(d) == d) //Llega directamente
              y = d;
          else if ( d - y > 1) // Se acerca a la esquina mas cercana
            y = parseInt(d);  
          else{
            if ( 1 - (d - parseInt(d)) + 1 - (y - parseInt(y)) < d - parseInt(d) + y -parseInt(y))
              y = parseInt(y) + 1;
            else
              y = parseInt(y);
              sw = true;
            }
            dist += Math.abs(y - y1);
        }else{
            let y1 = y;
            y = d;
            dist += Math.abs(y - y1);
        }
    //paso sur
    }else if(d - y < 0 && !sw && parseInt(x) == x){
        console.log("sur");
        if ( x != c ){
            let y1 = y;
            if (parseInt(d) == d) //Llega directamente
              y = d;
            else if ( y - d > 1) // Se acerca a la esquina mas cercana
              y = parseInt(d) + 1;  
            else{
              if ( 1 - (d - parseInt(d)) + 1 - (y - parseInt(y)) < d - parseInt(d) + y -parseInt(y))
                y = parseInt(y) + 1;
              else
                y = parseInt(y);
              sw = true;
            }
            dist += Math.abs(y - y1);
        }else{
            let y1 = y;
            y = d;
            dist += Math.abs(y1 - y);
        }
    }else
        sw = true;
    //paso este
    if(c - x > 0 && sw && parseInt(y) == y){
        console.log("este");
        if ( y != d ){
            let x1 = x;
            if (parseInt(c) == c) //Llega directamente
              x = c;
            else if ( c - x > 1) // Se acerca a la esquina mas cercana
              y = parseInt(c);  
            else{
              if ( 1 - (c - parseInt(c)) + 1 - (x - parseInt(x)) < c - parseInt(c) + x -parseInt(x))
                x = parseInt(x) + 1;
              else
                x = parseInt(x);
              sw = false;
            }
            dist += Math.abs(x - x1);
        }else{
            let x1 = x;
            x = c;
            dist +=  Math.abs(x - x1);
        }
    //paso oeste
    }else if( c - x < 0 && sw && parseInt(y) == y ){
        console.log("oeste");
        if (  y != d ){
            let x1 = x;
            if (parseInt(c) == c )
              x = c;
            else if ( x - c > 1)
              x = parseInt(c) + 1;
            else{
              if ( 1 - (c - parseInt(c)) + 1 - (x - parseInt(x)) < c - parseInt(c) + x -parseInt(x))
                x = parseInt(x) + 1;
              else
                x = parseInt(x);
              sw = false;
            }
            dist += Math.abs(x1 - x);
        }else{
            let x1 = x;
            x = c;
            dist += Math.abs(x1 - x);
        }
    }else
        sw = false;
    data.push({x,y});
    console.log("x:", x , "y:", y);
    console.log("distancia" ,dist);
    console.log("switch",sw);
  }
}

getDistance(0.4,1 ,0.9,3);