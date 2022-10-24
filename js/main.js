function getMyEle(id){
    return document.querySelector(id);
}

getMyEle('#btnTinh').onclick = function() {
    var diemChuan =  Number(getmyEle('#inputDiemChuan').value);
    var khuVuc =  Number(getmyEle('#khuVuc').value);
    var doiTuong =  Number(getmyEle('#doiTuong').value);
    var inputDiemmon1 =  Number(getmyEle('#inputDiemmon1').value);
    var inputDiemmon2 =  Number(getmyEle('#inputDiemmon2').value);
    var inputDiemmon3 =  Number(getmyEle('#inputDiemmon3').value);
    var diemTong = inputDiemmon1 + inputDiemmon2 + inputDiemmon3 + khuVuc + doiTuong ;
    var thongBaoDiem = ''
    if(diemTong >= diemChuan){
     thongBaoDiem = 'Chúc mừng bạn đã đậu. ' + diemTong;
    }else{
     thongBaoDiem = 'Bạn đã rớt. ' + diemTong;
    }
 
    document.querySelector('#txtThongBao').innerHTML = thongBaoDiem
 }

 const TU_0_50 = 500;
 const TU_51_100 = 650;
 const TU_101_200 = 850;
 const TU_201_350 = 1100;
 const TU_351_TROLEN = 1300;
 document.querySelector('#btnTienDien').onclick = function() {
    var inputHoTen =  getmyEle('#inputHoTen').value;
    var inputSoKw =  Number(getmyEle('#inputSoKw').value);
    var tienDien = tinhTienDien(inputSoKw,TU_0_50,TU_51_100,TU_101_200,TU_201_350,TU_351_TROLEN)

    document.querySelector('#txtThongBaoTienDien').innerHTML = 'Họ tên: ' + inputHoTen + ' Tiền điện: ' + tienDien
 }
 
function tinhTienDien(inputSoKw,TU_0_50,TU_51_100,TU_101_200,TU_201_350,TU_351_TROLEN){
    var tienDien = 0 ;
    if(inputSoKw > 0 && inputSoKw <= 50 ){// 0 - 50
        tienDien = inputSoKw * TU_0_50;
    }else if (inputSoKw > 50 && inputSoKw <= 100){// 51 - 100
        tienDien = 50 * TU_0_50 + (inputSoKw - 50) * TU_51_100;
    }else if(inputSoKw > 100 && inputSoKw <= 200){// 101 - 200
        tienDien = 50 * TU_0_50 + 50 * TU_51_100 + (inputSoKw - 100) * TU_101_200;
    }else if(inputSoKw > 200 && inputSoKw <= 350){//201 - 350
        tienDien = 50 * TU_0_50 + 50 * TU_51_100 + 100 * TU_101_200 + (inputSoKw - 200) * TU_201_350;
    }else if(inputSoKw > 350){// 351 trở lên
        tienDien = 50 * TU_0_50 + 50 * TU_51_100 + 100 * TU_101_200 + 150 * TU_201_350 + (inputSoKw - 350) * TU_351_TROLEN;
    }else{
        alert('Dữ liệu không hợp lệ')
    }
    return tienDien.toLocaleString();
}

getMyEle('#btnThue').onclick = function(){
    var hoTen = getMyEle('#hoTen').value;
    var tongThuNhapNam = Number(getMyEle('#tongThuNhapNam').value);
    var soNguoiPhuThuoc = Number(getMyEle('#soNguoiPhuThuoc').value);
    var thuNhapThue = thuNhapChiuThue(tongThuNhapNam,soNguoiPhuThuoc)
    document.querySelector('#txtThueThuNhap').innerHTML = thuNhapThue
}

function thuNhapChiuThue(tongThuNhapNam,soNguoiPhuThuoc) {
    var thuNhapThue = 0;
    if(tongThuNhapNam >= 60e6){
        thuNhapThue = (tongThuNhapNam - 4e6 - soNguoiPhuThuoc * 1e6) * 95
    }
    return thuNhapThue
}


function Hide(){
    getMyEle('#inputSoKetNoi').style = 'display:none'
}
Hide()

getMyEle('#khachHang').onchange = function() {
   var khachHang = getMyEle('#khachHang').value
    if(khachHang === 'doanhNghiep'){
        getMyEle('#inputSoKetNoi').style = 'display:block'
    }else{
        getMyEle('#inputSoKetNoi').style = 'display:none'
    }
}

getMyEle('#btnTienCap').onclick = function(){
    var khachHang = getMyEle('#khachHang').value;
    var maKH = getMyEle('#maKH').value;
    var soKenhCaoCap = Number(getMyEle('#soKenhCaoCap').value);
    var inputSoKetNoi = Number(getMyEle('#inputSoKetNoi').value);
    var tongTien = 0 ;
    switch (khachHang) {
        case 'nhaDan':
            tongTien = 4.5 + 20.5 + soKenhCaoCap * 7.5
            break;
        case 'doanhNghiep':    
              if(inputSoKetNoi <= 10){
                tongTien = 15 + 75 + 50 * soKenhCaoCap;
              }else{
                tongTien = 15 + 75 + 5 * inputSoKetNoi + 50 * soKenhCaoCap;
              }
        default:
            alert('Hãy chọn loại khách hàng')
            break;
    }
    document.querySelector('#txtTienCap').innerHTML = 'Mã khách hàng: ' + maKH + ' Tiền cáp: $' + tongTien
}

