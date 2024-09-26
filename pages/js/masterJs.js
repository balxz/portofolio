var motivations = [
"Dalam kegelapan, kita menemukan kekuatan untuk menyingsingkan cahaya.",
"Di dalam kegelapan, kita menemukan potensi tersembunyi yang menunggu untuk ditemukan.",
"Kegelapan adalah panggung di mana bintang-bintang kehidupan kita bersinar paling terang.",
"Tidak ada kegelapan yang abadi. Setiap malam akan berakhir dengan fajar yang menyegarkan.",
"Dalam kegelapan, kita belajar menghargai cahaya dengan lebih mendalam.",
"Kegelapan adalah pelukan yang menuntun kita menuju kedamaian batin.",
"Meski gelap, langit tetap menawarkan gemerlap bintang yang menginspirasi harapan.",
"Setiap langkah di dalam kegelapan membawa kita lebih dekat pada pencerahan.",
"Dalam kegelapan, kita menemukan ketenangan yang tak terduga.",
"Kegelapan adalah kanvas di mana kita dapat menggambar impian-impian kita yang paling berani.",
"Saat malam meliputi langit, jiwa kita mengalami perjalanan menuju kedamaian yang dalam.",
"Kegelapan adalah tempat kelahiran kreativitas yang tak terbatas.",
"Setiap bayangan di dalam kegelapan membawa cerita yang tak terungkapkan.",
"Di dalam kegelapan, kita menemukan kekuatan untuk bangkit dari keterpurukan.",
"Bahkan di dalam kegelapan, cahaya kecil sekecil api lilin dapat membawa harapan yang besar.",
"Dalam kegelapan, kita belajar mengandalkan intuisi kita yang paling dalam.",
"Kegelapan adalah jendela menuju introspeksi dan transformasi diri.",
"Meski gelap, langit masih menyelipkan impian-impian yang tak terbatas di dalamnya.",
"Dalam kegelapan, kita menemukan kekuatan untuk mencerahkan dunia di sekitar kita.",
"Setiap malam memberi kita kesempatan untuk merenung dan mempersiapkan diri untuk cahaya yang akan datang.",
"Di dalam kegelapan, jiwa kita menemukan refleksi yang paling jujur tentang diri kita sendiri.",
"Kegelapan adalah misteri yang menantang kita untuk menggali lebih dalam dan memahami diri kita dengan lebih baik.",
"Saat malam tiba, kita dapat merayakan ketenangan dan kesunyian yang memberi kesempatan bagi pikiran kita untuk berkembang.",
"Dalam kegelapan, kita merenung tentang perjalanan kita yang telah terlewati dan menemukan kekuatan untuk melanjutkan langkah kita ke depan.",
"Kegelapan adalah teman setia yang menyertai kita di setiap langkah hidup, membantu kita tumbuh dan belajar dari pengalaman-pengalaman yang sulit.",
]

var randomMotivation = motivations[Math.floor(Math.random() * motivations.length)];
document.querySelector(".motivation-text").textContent = '"' + randomMotivation + '"'

const navToggle = document.getElementById('nav-toggle')
const menu = document.getElementById('menu')
const closeBtn = document.getElementById('close-btn')

navToggle.addEventListener('click', () => {
menu.classList.add('active')
})

closeBtn.addEventListener('click', () => {
menu.classList.add('hidden')
setTimeout(() => {
menu.classList.remove('active')
menu.classList.remove('hidden')
}, 300)
})