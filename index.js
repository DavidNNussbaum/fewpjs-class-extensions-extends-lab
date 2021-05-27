class Polygon(arr) {
    get countSides {
        return arr.length
    }

    get perimeter {
        arr.reduce(function(total, num){
            return num + total        
    }
   }
  
}

class Triangle extends Polygon {
    get isValid {
        if {arr[0] + arr[1] < arr[2]} || {arr[1] + arr[2] < arr[0]} || {arr[0] + arr[2] < arr[1]}
        true
    } else {
        false
    }
    }
}