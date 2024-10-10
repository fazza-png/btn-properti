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
    promo : `${base_url}promo`,
    developer : `${base_url}developer?pg=1`,
    agen_properti : `${base_url}agen-properti/agensi/list`,
    ajukan_kpr : `${base_url}ajukan_kpr`,
    list_properti_buy : `${base_url}property?budget=200000000&tipeProperti=1&tab=perumahan&lokasi=Jakarta`,
    list_properti_rent : `${base_url}rent?lokasi=Jakarta&tipeProperti=kamar`
}

module.exports = {
    base_url,
    spesific_url 
}