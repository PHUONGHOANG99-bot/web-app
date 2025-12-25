# HƯỚNG DẪN KIỂM TRA VÀ DEPLOY GITHUB PAGES

## ✅ CÁC BƯỚC CẦN LÀM TRÊN GITHUB

### 1. Bật GitHub Pages
1. Vào repository: `https://github.com/PHUONGHOANG99-bot/web-app`
2. Click vào **Settings** (ở menu trên cùng)
3. Scroll xuống phần **Pages** (ở menu bên trái)
4. Trong phần **Source**, chọn: **GitHub Actions**
5. Lưu lại

### 2. Kiểm tra GitHub Actions
1. Vào tab **Actions** trong repository
2. Xem workflow **Deploy to GitHub Pages** có chạy không
3. Nếu có lỗi (màu đỏ), click vào để xem chi tiết lỗi
4. Nếu thành công (màu xanh), website sẽ có tại: `https://PHUONGHOANG99-bot.github.io/web-app/`

### 3. Kiểm tra Permissions (Quan trọng!)
1. Vào **Settings** → **Actions** → **General**
2. Tìm phần **Workflow permissions**
3. Chọn: **Read and write permissions**
4. Đảm bảo checkbox **Allow GitHub Actions to create and approve pull requests** được bật
5. Lưu lại

## 🔍 KIỂM TRA LỖI MÀN HÌNH TRẮNG

### Bước 1: Mở Developer Console
1. Mở website: `https://PHUONGHOANG99-bot.github.io/web-app/`
2. Nhấn **F12** hoặc **Right-click → Inspect**
3. Vào tab **Console**
4. Xem có lỗi màu đỏ không

### Các lỗi thường gặp:

#### Lỗi 404 (File not found)
- **Nguyên nhân**: Base path không đúng
- **Kiểm tra**: Xem console có lỗi load file `.js` hoặc `.css` không
- **Giải pháp**: Đảm bảo `vite.config.js` có `base: '/web-app/'` khi build

#### Lỗi CORS
- **Nguyên nhân**: GitHub Pages chưa deploy xong
- **Giải pháp**: Đợi 1-2 phút sau khi push code

#### Lỗi "Failed to fetch products.json"
- **Nguyên nhân**: File products.json không tồn tại trong dist/
- **Kiểm tra**: Đảm bảo `public/products.json` có trong repository
- **Giải pháp**: File này sẽ được Vite copy vào `dist/` khi build

#### Lỗi JavaScript runtime
- **Nguyên nhân**: Code có lỗi
- **Giải pháp**: Xem chi tiết lỗi trong console và báo lại

## 📋 CHECKLIST TRƯỚC KHI PUSH

- [ ] Code build thành công: `npm run build`
- [ ] Không có lỗi linter: `npm run lint`
- [ ] File `package-lock.json` có trong repository
- [ ] File `.github/workflows/deploy.yml` có trong repository
- [ ] File `public/products.json` có trong repository
- [ ] `vite.config.js` có `base: '/web-app/'` khi build

## 🚀 SAU KHI PUSH

1. Đợi GitHub Actions chạy (2-5 phút)
2. Kiểm tra tab **Actions** để xem kết quả
3. Nếu thành công, vào **Settings → Pages** để xem URL
4. Truy cập website và kiểm tra console

## 🔧 NẾU VẪN BỊ MÀN HÌNH TRẮNG

1. **Kiểm tra URL đúng chưa**: `https://PHUONGHOANG99-bot.github.io/web-app/` (chú ý có `/` ở cuối)
2. **Xóa cache trình duyệt**: Ctrl+Shift+Delete → Clear cache
3. **Thử trình duyệt khác**: Chrome, Firefox, Edge
4. **Mở Developer Console**: Xem lỗi cụ thể
5. **Kiểm tra Network tab**: Xem file nào bị 404

## 📞 BÁO LỖI

Nếu vẫn không được, cung cấp:
- Screenshot của Developer Console (tab Console và Network)
- URL website bạn đang truy cập
- Log từ GitHub Actions (nếu có lỗi)

