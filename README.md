# TugasBesar_PWeb
Tugas Besar Praktek Web 3

Merupakan Program Node JS menggunakan framework Express JS

Untuk List API file POSTMAN (tinggal di Import Saja di POSTMAN) 

## Anggota Kelompok :

* Muhamad Maulana Yusup - 160613063
* Jeri - 160613029

## IP Address

```
159.89.194.18:3107
```

## Persiapan

Buatlah Akun terlebih dahulu dengan API Register

```url
159.89.194.18:3107/user/register
```

* Method : POST
* Parameter

```
* username (string)
* email (string)
* password (string)
* roles (string)
```

Untuk Roles terdapat 2 pilihan yaitu 
* admin 
* user

### Lalu Login Menggunakan API Login

Untuk Mendapatkan Access Token

```url
159.89.194.18:3107/user/login
```

* Method : POST
* Parameter

```
* username
* password
```

Username di isikan sesuai yang pernah di buat pada saat register

## List API

Berikut merupakan List API Untuk User Perlu Login Terlebih Dahulu

### Lihat Semua Buku
```url
159.89.194.18:3107/buku
```
* Mehtod : GET

### Add Buku
```url
159.89.194.18:3107/buku
```
#### Mehtod : POST
#### Level : ADMIN
#### Parameter : 
* judul
* penerbit
* jumlah
* harga
* categoryId

### Update Buku
```url
159.89.194.18:3107/buku/id
```
#### Mehtod : PUT
#### Level : ADMIN
#### Parameter : 
* judul
* penerbit
* jumlah
* harga
* categoryId

### Hapus Buku
```url
159.89.194.18:3107/buku/id
```
#### Mehtod : DELETE
#### Level : ADMIN
#### Parameter : 
* id

### Cari Buku
```url
159.89.194.18:3107/buku/buku/:id
```
#### Mehtod : GET
#### Parameter : 
* id

### Tambah Kategori
```url
159.89.194.18:3107/category
```
#### Mehtod : POST
#### Level : ADMIN
#### Parameter : 
* NamaCategory

### Lihat Semua Category
```url
159.89.194.18:3107/category
```
#### Mehtod : GET

### Order Buku
```url
159.89.194.18:3107/keranjang/orderBuku
```
#### Mehtod : POST
#### Level : USER
#### Parameter : 
* bukuId
* jumlah


