# Irwan Notes 4 December 2020
 ## Properti vs Method
 Method = greeting: ()=>{
     return "Hello,  I'm
 }
 Properti = langsung dalam ()

 untuk mengetahui method harus melalui reference

👇 referensi method 
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions  


👇 referensi object berisikan propety dan method 
 
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions 

 https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics 

## penjelasan method pada routes
 app.get('/', (req,res)=>{

 })

 '/' = merupakan parameter path
 req,res = parameter anonymous function

 ### Query
 query digunakan untuk memfilter sebuah request atau memodifikasi hasil dari request get. Data yang di get bentuknya seperti apa

 *http:localhost3000/note/query.....*

 ### Param
param digunakan untuk menspesifikasikan hal yang mau diambil

### Analoginya gini
Misal kita mau cari rumah Nomor 1A, dengan pemilik nama Asep Boruto

*Query : kita nyari rumah yang nama pemiliknya Asep. Nanti keluar ada Asep Supriyadi, Asep Boruto, dan Asep yang lain..*

*Params : kita langsung spesifik nyari rumah nomor 1A*

## git merge --abort = untuk mendenied segala perubahan dari pull

## git pull -X theirs upstream *branchName* = untuk mengaccept perubahan di git pull


## Jwt Secret = tanda tangan/kata kunci

## Jsonwebtoken=jwt= memberikan token atau izin akses

## Jwt expires= masa berlaku

## .env = environment variabel seperti lembaran berisi informasi
## signJwt = untuk memasukkan proses pemasukkan tanda tangan
## parseJwt = mengembalikan proses tanda tangan
## jwt.verify = verifikasi token
## try/catch = seperti if/else
## JwtHelper = logic ketika mengambil Jwt

## {object destructering}


## asyncronous vs syncronous
syncronous = langsung ada hasil dari fungsi

asyncronous = delay dlu

anonymsu

## jwt = befungsi sebagai kunci client pengguna/client APi agar bisa mengakses routes.. bla bla..


## bcrypt =mengenskripsi password di database