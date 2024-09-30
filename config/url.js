const base_url = [
    'https://www.btnproperti.co.id/', //Production
    // 'http://172.16.1.41:3000/' //Development
]

const spesific_url = {
    hitung_harga :`${base_url}tools/hitung-harga-properti`,
    harga_pasar : `${base_url}tools/harga-pasaran-rumah?pg=1`,
    simulasi_kpr : `${base_url}tools/simulasi-kpr`,
    komparasi_properti : `${base_url}tools/komparasi`,
    konsultasi : `${base_url}tools/konsultasi`,
    blog : `${base_url}blog`,
    promo: `${base_url}promo`
}

module.exports = {
    base_url,
    spesific_url 
}