import image1 from './assets/images/slide1.jpg';
import image2 from './assets/images/slide2.jpg';
import image3 from './assets/images/slide3.jpg';
import image4 from './assets/images/slide4.jpg';
import image5 from './assets/images/slide5.jpg';
import image6 from './assets/images/slide6.jpg';
import image7 from './assets/images/slide7.jpg';
import image8 from './assets/images/slide8.jpg';


export const data = [
  {
    id: 1,
    name: 'Xe nâng người tự hành ',
    image: [image1, image2, image3, image4, image5, image6, image7, image8],
    description: 'Xe nâng người tự hành là loại xe nâng được thiết kế để di chuyển và nâng người lên cao một cách dễ dàng và an toàn.',
    manufacturing: 'Nhà sản xuất A',
    maxHeight: '12m',
    weight: '2000kg',
    loadCapacity: '500kg',
    power: 'Điện',
    category: 'Cắt kéo',
    dimensions: {
      length: '4m',
      width: '2m',
      height: '2.5m',
    }
  },
  {
    id: 2,
    name: 'Xe nâng người cần trục',
    image: [image2],
    description: 'Xe nâng người cần trục được thiết kế để nâng người lên cao với cần trục linh hoạt và an toàn.',
    manufacturing: 'Nhà sản xuất B',
    maxHeight: '15m',
    weight: '2500kg',
    loadCapacity: '600kg',
    category: 'Cần trục',
    power: 'Diesel',
    dimensions: {
      length: '5m',
      width: '2.5m',
      height: '3m',
    }
  },

  {
    id: 3,
    name: 'Xe nâng người dạng cắt kéo',
    image: [image3],
    description: 'Xe nâng người dạng cắt kéo phù hợp cho các công việc trong nhà và ngoài trời với độ ổn định cao.',
    manufacturing: 'Nhà sản xuất C',
    maxHeight: '10m',
    weight: '1800kg',
    loadCapacity: '400kg',
    power: 'Điện',
    category: 'Cắt kéo',
    dimensions: {
      length: '3.5m',
      width: '1.8m',
      height: '2.2m',
    }
  },
  {
    id: 4,
    name: 'Xe nâng người dạng cần gấp khúc',
    image: [image4],
    description: 'Xe nâng người dạng cần gấp khúc giúp tiếp cận các vị trí khó khăn với độ linh hoạt cao.',
    manufacturing: 'Nhà sản xuất D',
    maxHeight: '18m',
    weight: '3000kg',
    loadCapacity: '700kg',
    power: 'Diesel',
    category: 'Gấp khúc',
    dimensions: {
      length: '6m',
      width: '2.8m',
      height: '3.5m',
    }
  },
  {
    id: 5,
    name: 'Xe nâng người dạng thẳng đứng',
    image: [image5],
    description: 'Xe nâng người dạng thẳng đứng phù hợp cho các công việc trong không gian hẹp.',
    manufacturing: 'Nhà sản xuất E',
    maxHeight: '8m',
    weight: '1500kg',
    loadCapacity: '300kg',
    power: 'Điện',
    category: 'Thẳng đứng',
    dimensions: {
      length: '2.5m',
      width: '1.5m',
      height: '2m',
    }
  },
  {
    id: 6,
    name: 'Xe nâng người dạng cần thẳng',
    image: [image6],
    description: 'Xe nâng người dạng cần thẳng có khả năng tiếp cận độ cao lớn với độ ổn định cao.',
    manufacturing: 'Nhà sản xuất F',
    maxHeight: '20m',
    weight: '3500kg',
    loadCapacity: '800kg',
    power: 'Diesel',
    category: 'Cần thẳng',
    dimensions: {
      length: '7m',
      width: '3m',
      height: '4m',
    }
  },
  {
    id: 7,
    name: 'Xe nâng người dạng nhỏ gọn',
    image: [image7],
    description: 'Xe nâng người dạng nhỏ gọn phù hợp cho các công việc trong nhà với không gian hạn chế.',
    manufacturing: 'Nhà sản xuất G',
    maxHeight: '6m',
    weight: '1200kg',
    loadCapacity: '250kg',
    power: 'Điện',
    category: 'Nhỏ gọn',
    dimensions: {
      length: '2m',
      width: '1.2m',
      height: '1.8m',
    }
  },
  {
    id: 8,
    name: 'Xe nâng người địa hình gồ ghề',
    image: [image8],
    description: 'Xe nâng người địa hình gồ ghề được thiết kế để hoạt động trên các bề mặt không bằng phẳng.',
    manufacturing: 'Nhà sản xuất H',
    maxHeight: '14m',
    weight: '2800kg',
    loadCapacity: '600kg',
    power: 'Diesel',
    category: 'Địa hình',
    dimensions: {
      length: '5.5m',
      width: '2.5m',
      height: '3.2m',
    }
  },
  {
    id: 9,
    name: 'Xe nâng người dạng kéo tay',
    image: [image2],
    description: 'Xe nâng người dạng kéo tay phù hợp cho các công việc nhẹ và dễ dàng di chuyển.',
    manufacturing: 'Nhà sản xuất I',
    maxHeight: '5m',
    weight: '1000kg',
    loadCapacity: '200kg',
    power: 'Thủ công',
    category: 'Kéo tay',
    dimensions: {
      length: '1.8m',
      width: '1m',
      height: '1.5m',
    }
  },
  {
    id: 10,
    name: 'Xe nâng người dạng hybrid',
    image: [image5],
    description: 'Xe nâng người dạng hybrid kết hợp giữa động cơ điện và diesel để tối ưu hiệu suất.',
    manufacturing: 'Nhà sản xuất J',
    maxHeight: '16m',
    weight: '3200kg',
    loadCapacity: '700kg',
    power: 'Hybrid',
    category: 'Hybrid',
    dimensions: {
      length: '6.5m',
      width: '3m',
      height: '3.8m',
    }
  }
]