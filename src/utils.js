export const keyToVietnamese = (key) => {
  const dictionary = {
    'maxHeight': 'Chiều cao làm việc tối đa',
    'manufacturing': 'Nhà sản xuất',
    'weight': 'Trọng lượng của xe',
    'loadCapacity': 'Tải trọng tối đa',
    'power': 'Nguồn năng lượng',
    'category': 'Loại xe',
    'dimensions': 'Kích thước',
    // Thêm các từ khóa khác vào đây
  };

  return dictionary[key] || key;
};