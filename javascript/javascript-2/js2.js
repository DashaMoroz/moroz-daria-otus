function getPath(elem) {

    let path = '';
    while(elem.parentNode && elem.nodeName.toLowerCase() != 'html') {
    
        path += elem.nodeName.toLowerCase();
        //get class
        if (elem.className) {
            path += '.' + elem.className.replaceAll(' ', '.');
        } 
        //get id
        if (elem.id) {
            path += '#' + elem.id + ' ';
        } else {  
        
            var el = elem, nth = 1;
            while (el = el.previousElementSibling) {
                if (el.nodeName.toLowerCase() == elem.nodeName.toLowerCase())
                nth++;
            }
            if (nth != 1)
            path += ":nth-of-type("+nth+")";

            path += ' ';
        }

        elem = elem.parentNode;
    }
    rez = path.trim().split(' ').reverse().join(' ');
    return rez;
}

