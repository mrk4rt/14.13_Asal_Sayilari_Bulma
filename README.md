# 1 ile 100 Arasındaki Asal Sayıları Bulma

## Proje Amacı
Bu proje, 1 ile 100 arasındaki asal sayıları for döngüsü kullanarak bulmayı ve ekrana listelemeyi amaçlar. Asal sayılar, sadece kendisine ve 1'e tam bölünebilen pozitif tam sayılardır. Bu proje ile kullanıcı for döngüsü ve asal sayıları kontrol eden bir algoritma geliştirir.

## Kullanılan Değişkenler
- **`sayi`**: Döngüde kontrol edilecek sayıyı temsil eder (1 ile 100 arasında değişir).
- **`asalMi`**: Sayının asal olup olmadığını belirlemek için kullanılan bir boolean değişkendir.
- **`i`**: Her bir sayı için, asal olup olmadığını kontrol etmek amacıyla sayıyı bölen değişkendir.

## Anahtar Kelimeler
- `for`: 1 ile 100 arasındaki sayıları sırayla kontrol etmek için kullanılır.
- `if`: Sayının asal olup olmadığını kontrol etmek için koşullar belirler.
- `break`: Eğer bir sayı asal değilse, kontrol işlemini durdurur ve bir sonraki sayıya geçer.

## Proje Adımları

1. **Başlangıç Mesajı**: Kullanıcıya işlemin başladığını bildiren bir mesaj gösterin.

2. **1 ile 100 Arasında Döngü**: Bir for döngüsü ile 1'den 100'e kadar olan sayıları sırayla kontrol edin.
   - İç içe bir for döngüsü kurarak, her sayının asal olup olmadığını kontrol edin.

3. **Asal Sayı Kontrolü**: 
   - Her bir sayının 2'den kendisinden bir önceki sayıya kadar olan sayılarla tam bölünüp bölünmediğini kontrol edin.
   - Eğer tam bölünen bir sayı bulunursa, `asalMi` değişkenini `false` yaparak bu sayının asal olmadığını işaretleyin ve döngüyü sonlandırın.
   
4. **Asal Sayı Olarak Ekleme**: 
   - Eğer sayı sadece kendisine ve 1'e tam bölünüyorsa, bu sayı asaldır. Ekrana bu sayıyı yazdırın veya listeye ekleyin.

5. **Sonuçları Gösterme**: 
   - Program tüm sayıları kontrol ettikten sonra tüm asal sayıları ekranda listeleyerek gösterin.
   
6. **Program Sonu**: İşlem tamamlandığında programın bittiğine dair bir mesaj gösterin.
