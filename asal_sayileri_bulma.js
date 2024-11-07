console.log("1 ile 100 arasındaki asal sayılar:");

for (let sayi = 2; sayi <= 100; sayi++) {
  let asalMi = true;

  for (let i = 2; i < sayi; i++) {
    if (sayi % i === 0) {
      asalMi = false;
      break;
    }
  }

  if (asalMi) {
    console.log(sayi);
  }
}
