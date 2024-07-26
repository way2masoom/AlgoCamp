let i = 1;
let j=2;

while (j <= 100) {

    while (i <= 10) {

        if (i % 7 == 0) {
            break;
        }
        console.log(i);
        i += 1;
    }

}