# React Tube

Repositori untuk belajar [react.js](https://facebook.github.io/react/) dengan meniru tampilan [youtube](https://www.youtube.com/).

## Persiapan

Duplikasi repositori ini dan install dependensi modul ini dengan perintah berikut,

```
$ git clone git@github.com:berkedel/react-tube.git
$ cd react-tube
$ npm install
$ npm start
```

## Mockup

Kira-kira tampilan [react-tube](https://github.com/berkedel/react-tube) yang akan kita bikin bisa kita sketsa sebagai berikut,

![mockup react-tube](images/react_tube_mockup.png)

Di sini kita akan membaginya ke dalam beberap komponen react:

* **SearchBar**
Menerima input kata kunci video yang akan dicari.
* **VideoDetail**
Video player beserta judul dan deskripsi video yang sedang dimainkan.
* **VideoListItem**
Preview video berupa thumbnail dan judul.
* **VideoList**
Daftar preview video yang didapatkan dari hasil pencarian. Komponen ini mempunyai beberapa komponen *VideoListItem*
* **App**
Komponen yang menggabungkan semua komponen sebelumnya.


![react-tube components](images/react_tube_components.png)

## Daftar API Youtube

Untuk menggunakan API Youtube, kita harus mendapatkan *API key* dengan mendaftar ke [Google Developers Console](https://console.developers.google.com). Cari bagian *YouTube APIs* dan pilih *YouTube Data API*. Kemudian klik tombol *Enable*.

Di panel sebelah kiri pilih menu *Credentials*. Daftarkan *credential* baru dengan mengklik *Create credentials*, lalu pilih sub menu *API key*, dan klik tombol *Browser key*. Isi seadanya dan tekan tombol *Create*. Catat *Key* yang sudah dibuat.

### HTTP Request Library

Untuk mendapatkan hasil pencarian video, dibutuhkan modul lain untuk memanggil API youtube. Kita menggunakan [axios](https://github.com/mzabriskie/axios). Install,

```
$ npm i -S axios
```

Format untuk mengonsumsi search API youtube bisa dibaca di [dokumentasi ini](https://developers.google.com/youtube/v3/docs/search/list#request).
