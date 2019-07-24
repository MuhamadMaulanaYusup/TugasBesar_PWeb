# TugasBesar_PWeb
Tugas Besar Praktek Web 3

Merupakan Program Node JS menggunakan framework Express JS


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
* kategoriId
* note(data kategori harus ada data terlebih dahulu di databasenya)

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
* kategoriId

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
159.89.194.18:3107/kategori
```
#### Mehtod : POST
#### Parameter : 
* nama_kategori

### Ubah Kategori
```url
159.89.194.18:3107/kategori/:id
```
#### Mehtod : PUT
#### Parameter : 
* nama_kategori


### Lihat Semua kategori
```url
159.89.194.18:3107/kategori
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


