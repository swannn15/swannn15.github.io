const nama = "iswan kantu";
let usia = 17;

// let bio = document.getElementById('bio')
// console.log(bio);

function generateBiodata() {
    let generasi;

    if (usia > 14 && usia < 19) {
        generasi = "generasi remaja";
    }
    else if (usia > 20 && usia < 40) {
        generasi = "generasi dewasa";
    }
    else if (usia > 40 && usia < 50) {
        generasi = "generasi tua";
    }
    else if (usia < 14) {
        generasi = "generasi anak anak";
    }
    else {
        generasi = "generasi purba";
    }

    // return bio.innerHTML = generasi;
    // console.log(generasi)

}

console.log(nama);
console.log(usia);

generateBiodata();