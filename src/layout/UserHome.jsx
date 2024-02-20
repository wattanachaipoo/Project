import { Link } from 'react-router-dom';


export default function UserHome() {
  return (

    <div className="bg-white">
      <div className="flex justify-between bg-[url('https://lifestyle.campus-star.com/app/uploads/2022/08/grand-hotel.jpg')]">
        <div className="relative w-1/2 ml-5">
          <img src="https://assets.brandinside.asia/uploads/2021/03/shutterstock_756956185-scaled.jpg" style={{ width: "100%", height: "100%" }} alt="Background Image" />
        </div>
        <div className="text-white text-center w-1/2 flex items-center justify-center text-6xl font-bold">
          <h1>ยินดีต้อนรับเข้าสู่ Blue Service Hotel</h1>
        </div>

      </div>
      <hr className="w-3/4 border-black border-solid border-4 mx-auto my-8"></hr>


      {/* ประเภทห้อง */}
      <div className="text-gray-600 text-center flex items-center justify-center text-6xl font-bold">
        <h1>ประเภทห้อง</h1>
      </div>
      <div className="flex justify-center p-10 text-black">
        โรงแรม Blue Services Hotel ประกอบไปด้วย Standard Room (ห้องสแตนดาร์ด):
        ห้องพักประเภท Standard Room เป็นห้องที่มีขนาดกะทัดรัดที่สุดในโรงแรม มักประกอบด้วยเตียงนอนและสิ่งอำนวยความสะดวกพื้นฐาน เช่น ห้องน้ำส่วนตัว ทีวี และเครื่องปรับอากาศ มักเหมาะสำหรับผู้เดินทางคนเดียวหรือคู่รักที่ต้องการที่พักในราคาประหยัดและสะดวกสบาย
        Deluxe Room (ห้องดีลักซ์):
        ห้อง Deluxe Room เป็นห้องที่มีขนาดกว้างและหรูหรากว่า Standard Room มักมีสิ่งอำนวยความสะดวกมากกว่า เช่น เตียงขนาดใหญ่กว่า โซฟา ตู้เย็น และอื่นๆ ซึ่งเหมาะสำหรับผู้เดินทางที่ต้องการห้องพักที่สะดวกสบายและหรูหราขึ้น
        Suite Room (ห้องสวีท):
        ห้อง Suite Room เป็นห้องที่มีขนาดใหญ่ที่สุดในโรงแรม มักมีห้องนั่งเล่นแยกและสิ่งอำนวยความสะดวกมากมาย เช่น เตียงขนาดใหญ่ โซฟา ห้องรับประทานอาหารแยก และอื่นๆ ซึ่งเหมาะสำหรับคู่รักหรือครอบครัวที่ต้องการที่พักที่หรูหราและมีสิ่งอำนวยความสะดวกครบครัน
        ร้านอาหารและสิ่งอำนวยความสะดวก:
        โรงแรมมีร้านอาหารภายในที่บริการอาหารคาวและหวานคุณภาพ รวมถึงสิ่งอำนวยความสะดวกอื่นๆ เช่น สระว่ายน้ำ ฟิตเนส หรือบริการซักรีด ที่ช่วยให้ผู้เข้าพักสามารถสัมผัสการพักผ่อนที่สมบูรณ์แบบได้อย่างสมบูรณ์แบบ
      </div>
      {/* รูปห้อง */}
      <div className="flex justify-center mt-9">
        <div className="flex flex-wrap">
          <div className="card w-96 bg-base-100 shadow-xl mr-4 mb-4 transform transition-transform hover:scale-105">
            <div className="card-body">
              <h2 className="card-title">Standard Room</h2>
              <p className="text-base-content">ห้องสแตนดาร์ด (Standard Room) เป็นประเภทของห้องพักในโรงแรมที่มีขนาดกะทัดรัดที่สุด โดยห้องประเภทนี้จะมีสิ่งอำนวยความสะดวกพื้นฐานที่จำเป็น เช่น เตียงนอน ห้องน้ำ ทีวี และเครื่องปรับอากาศ เหมาะสำหรับผู้เข้าพักที่เดินทางคนเดียวหรือมาเป็นคู่ อีกทั้งยังสะดวกต่อการเข้าพักเพียงไม่กี่วันและต้องการห้องพักในราคาประหยัด </p>
              <div className="card-actions">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"><a href="/nom">จองห้อง</a></button>
              </div>
            </div>
            <figure><img src="https://www.zazahotel2019.com/wp-content/uploads/2019/09/1bed.png" alt="standard" /></figure>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl mr-4 mb-4 transform transition-transform hover:scale-105">
            <div className="card-body">
              <h2 className="card-title">Deluxe Room</h2>
              <p className="text-base-content">ประเภทของห้องพักในโรงแรมแบบห้องดีลักซ์ (Deluxe Room) เป็นห้องพักที่มีขนาดกว้างและหรูหรากว่าห้องซูพีเรีย โดยจะมีสิ่งอำนวยความสะดวกครบครันมากกว่า เช่น เตียงนอนขนาดใหญ่ โซฟา โต๊ะทำงาน ตู้เย็น มินิบาร์ โทรศัพท์จอใหญ่ และอ่างอาบน้ำเป็นต้น เหมาะสำหรับผู้เข้าพักที่ต้องการที่พักที่หรูหราและสะดวกสบาย สามารถเข้าพักคนเดียว เป็นคู่ หรือครอบครัวขนาดเล็กก็ได้</p>
              <div className="card-actions">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"><a href="/nom">จองห้อง</a></button>
              </div>
            </div>
            <figure><img src="https://media.onyx-hospitality.com/-/media/project/amari/common/property/pattaya/hotel-photos/stay/deluxe-ocean-view/deluxe-ocean-view-king-1.jpg?rev=-1" alt="deluxe" /></figure>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl mr-4 mb-4 transform transition-transform hover:scale-105">
            <div className="card-body">
              <h2 className="card-title">Suite Room</h2>
              <p className="text-base-content">ห้องสวีท (Suite Room) เป็นห้องพักขนาดใหญ่ที่สุด และมักมีห้องนั่งเล่นแยกต่างหาก มาพร้อมสิ่งอำนวยความสะดวกมากมาย เช่น เตียงนอนขนาดใหญ่ โซฟา โต๊ะทำงาน ตู้เย็น มินิบาร์ ห้องเตรียมอาหาร ห้องรับประทานอาหาร ห้องน้ำขนาดใหญ่พร้อมอ่างอาบน้ำ เป็นต้น เหมาะสำหรับผู้เข้าพักที่เดินทางมากับคู่รัก หรือเป็นครอบครัวที่ต้องการห้องพักที่หรูหราและสะดวกสบายเป็นพิเศษ</p>
              <div className="card-actions">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"><a href="/nom">จองห้อง</a></button>
              </div>
            </div>
            <figure><img src="https://blog.amari.com/wp-content/uploads/2020/01/executive-suite-ocean-view-2.jpg" alt="suite" /></figure>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl mr-4 mb-4 transform transition-transform hover:scale-105">
            <div className="card-body">
              <h2 className="card-title">Bule Service Hotel</h2>
              <p className="text-base-content">ให้บริการห้องพักที่สะอาดและสะดวกสบาย ทั้งห้องพัดลมและแอร์คอนดิชั่น พร้อมสิ่งอำนวยความสะดวกพื้นฐาน เพื่อให้ผู้เข้าพักสามารถผ่อนคลายในบรรยากาศที่เงียบสงบ

                มีร้านอาหารในรีสอร์ทที่บริการอาหารคาวและหวานคุณภาพ ที่สามารถสัมผัสได้ว่าอร่อยและคุ้มค่ากับราคา

                มีกิจกรรมต่างๆ เช่น สระว่ายน้ำ การเล่นกอล์ฟ การเดินป่า และการเดินทางไปยังสถานที่ท่องเที่ยวในบริเวณใกล้เคียง</p>
            </div>
            <figure><img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/475760683.jpg?k=22312f4f994d7290fc2797bcb32c20a1f0d3d06d7fb45ecf1910215fb1d81124&o=&hp=1" alt="suite" /></figure>
          </div>
        </div>
      </div>
      {/* รูปห้อง */}

      {/*  ประเภทห้อง*/}
      <hr className="w-3/4 border-black border-solid border-4 mx-auto my-8"></hr>

      {/* อาหาร */}
      <div className="text-gray-600 text-center flex items-center justify-center text-6xl font-bold">
        <h1>อาหาร</h1>
      </div>
      <div className="flex justify-center p-10 text-black">
        โรงแรม Blue Services Hotel มีเมนูอาหารคาวและหวานที่หลากหลาย โดยมีตัวเลือกที่เหมาะสำหรับทุกคน ไม่ว่าจะเป็นเมนูอาหารไทยที่นำเสนอรสชาติเด็ดของอาหารไทยที่แท้จริง หรือเมนูอาหารสากลที่เสนอรสชาติที่หลากหลายและเป็นเอกลักษณ์
        นอกจากนี้ยังมีเครื่องดื่มหลากหลายเช่น น้ำอัดลม น้ำผลไม้สด กาแฟ ชา และเครื่องดื่มอื่นๆ ที่เสริฟให้เพื่อสร้างประสบการณ์การรับประทานอาหารที่สมบูรณ์แบบ
        โรงแรม Blue Services Hotel มีบรรยากาศที่เป็นส่วนตัวและเงียบสงบ เหมาะสำหรับการพักผ่อนหลังจากการเดินทางหรือกิจกรรมต่างๆ และสร้างสถานที่ที่เหมาะสมสำหรับการรับประทานอาหารในสภาพแวดล้อมที่สะดวกสบายและเป็นส่วนตัว
        โรงแรมยังมีบริการอื่นๆ เช่น การจัดงานเลี้ยง หรืออาหารว่างสำหรับผู้เข้าพักที่ต้องการสัมผัสกับบรรยากาศและอาหารที่คุณภาพที่สุดในเมืองได้
        โรงแรม Blue Services Hotel มุ่งมั่นที่จะให้บริการอาหารที่มีคุณภาพและบรรยากาศที่เหมาะสมสำหรับการพักผ่อนของแขกผู้มาเยือนทุกท่าน
      </div>
      <div className="flex justify-center flex-wrap  mt-6 mb-9">
        <div className="Food mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://lofficielthailand.com/wp-content/uploads/2020/08/Mothers-Day-2020_Madison-02.jpg" alt="Food 1" class="object-cover w-full h-full" />
          </div>
        </div>

        <div className="Food mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://img.wongnai.com/p/984x0/2022/10/22/91c9f86e0c6748edb358c78fb507bed1.jpg" alt="Food 2" class="object-cover w-full h-full" />
          </div>
        </div>

        <div className="Food mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://www.ryoiireview.com/upload/article/202310/1697529756_129c13d4abaa46f3f1c17bcc0e86f38d.jpg" alt="Food 3" class="object-cover w-full h-full" />
          </div>
        </div>

        <div className="Food mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://image.posttoday.com/media/content/2017/11/24/00000E022017112406164717AAAAAAAA.jpg?x-image-process=style/lg" alt="Food 4" class="object-cover w-full h-full" />
          </div>
        </div>

        <div className="Food mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://f.ptcdn.info/349/052/000/osuxqy4lqOZ8D556uoA-o.jpg" alt="Food 5" class="object-cover w-full h-full" />
          </div>
        </div>

        <div className="Food mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://www.weddinglist.co.th/wp-content/uploads/2018/01/19029688_1498473336880313_3886704440698166957_n.jpg" alt="Food 6" class="object-cover w-full h-full" />
          </div>
        </div>

        <div className="Food mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://p16-va.lemon8cdn.com/tos-alisg-i-0000/8f5686fe71a94cd9bdba6f88551cc7d3~tplv-tej9nj120t-origin.webp" alt="Food 7" class="object-cover w-full h-full" />
          </div>
        </div>

        <div className="Food mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://www.ryoiireview.com/upload/article/202111/1636453578_872c561962fc52867ef7a0f847fbfe83.jpg" alt="Food 8" class="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* อาหาร */}


      <hr className="w-3/4 border-black border-solid border-4 mx-auto my-8"></hr>
      {/* สปอตคลับ */}
      <div className="text-gray-600 text-center flex items-center justify-center text-6xl font-bold">
        <h1>สปอร์ตคลับ/สระว่ายน้ำ</h1>
      </div>
      <div className="flex justify-center p-10 text-black">
        สปอร์ตคลับของโรงแรม Blue Services Hotel มีสิ่งอำนวยความสะดวกที่ครอบคลุมทุกด้านของการออกกำลังกาย ซึ่งรวมถึงเครื่องออกกำลังกายและอุปกรณ์อื่นๆ ที่จำเป็นสำหรับการฝึกฝนและพัฒนาสุขภาพ
        มีคอร์สออกกำลังกายที่หลากหลายให้เลือก รวมถึงการสอนโยคะ การฝึกออกกำลังกายแบบคาร์ดิโอ และการฝึกพลังงานแบบเพิ่มประสิทธิภาพ
        มีห้องออกกำลังกายเครื่องออกกำลังกาย เช่น ลู่วิ่ง จักรยานนั่งปั่น และเครื่องฝึกหุ่น รวมทั้งห้องฟิตเนสที่มีเครื่องออกกำลังกายแบบพกพาสำหรับฝึกซ้อมที่หลากหลาย
        จัดหลักสูตรการฝึกซ้อมโดยนักกีฬาและครูผู้ชำนาญ ซึ่งสามารถช่วยให้ผู้เข้าร่วมฝึกซ้อมได้รับคำแนะนำและคำแนะนำที่เหมาะสมเพื่อพัฒนาทักษะและสมรรถภาพของตนเองได้อย่างเหมาะสม
        จัดโปรแกรมการฝึกซ้อมที่หลากหลาย รวมถึงคลาสกีฬาและกิจกรรมที่จะช่วยสร้างสมรรถภาพทางกายและจิตใจให้กับผู้เข้าร่วม
        โรงแรม Blue Services Hotel มุ่งมั่นที่จะให้บริการสปอร์ตคลับที่มีคุณภาพและสิ่งอำนวยความสะดวกที่เหมาะสมสำหรับผู้เข้าพักทุกท่าน
      </div>
      {/* รูป */}
      <div className="flex justify-center flex-wrap  mb-9">
        <div className="Sport mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://isrotel-agamim-eilat.hotelmix.co.th/data/Photos/OriginalPhoto/7000/700044/700044307/Agamim-By-Isrotel-Collection-Eilat-Exterior.JPEG" alt="Sport 1" class="object-cover w-full h-full" />
          </div>
        </div>

        <div className="Sport mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://webbox.imgix.net/images/wzpopdvvglpwnlzj/0ee230b9-bce3-46a4-8bc7-627e84ec9692.jpg?auto=format,compress&fit=crop&crop=entropy" alt="Sport 2" class="object-cover w-full h-full" />
          </div>
        </div>

        <div className="Sport mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://atmindgroup.com/hotelamberpattaya/wp-content/uploads/2020/10/Fitness-Center5-min.jpeg" alt="Sport 3" class="object-cover w-full h-full" />
          </div>
        </div>

        <div className="Sport mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://image.makewebeasy.net/makeweb/m_1920x0/xRomQkbEt/DefaultData/SOFIT__ALL_4_3_2.jpg" alt="Sport 4" class="object-cover w-full h-full" />
          </div>
        </div>

        <div className="Sport mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://www.scparkhotel.com/wp-content/uploads/2020/02/Fitness-Pool7-min.jpg" alt="Sport 5" class="object-cover w-full h-full" />
          </div>
        </div>

        <div className="Sport mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://www.ryt9.com/img/files/20210126/iq0159fb3bb5dad8ce2a1a19b29315e931.jpg" alt="Sport 6" class="object-cover w-full h-full" />
          </div>
        </div>

        <div className="Sport mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/315882631.jpg?k=18375e21b0f2b3f9eafb503e07eedc2be780ee17f1aa87e384b925c019c6bf14&o=" alt="Sport 7" class="object-cover w-full h-full" />
          </div>
        </div>

        <div className="Sport mt-4 mr-4">
          <div class="rounded overflow-hidden w-[400px] h-[400px] transition-transform transform hover:scale-110">
            <img src="https://images.trvl-media.com/lodging/2000000/1160000/1156500/1156491/dfec5901.jpg?impolicy=resizecrop&rw=432&ra=fit" alt="Sport 8" class="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      <hr className="w-3/4 border-black border-solid border-4 mx-auto my-8"></hr>
      {/* สปอตคลับ */}

      {/* เกี่ยวกับเรา */}
      <div className="py-10">
        <div className="container mx-auto">
          <div className=" text-center flex items-center justify-center text-5xl">
            <p className="text-black">เกี่ยวกับเรา</p>
          </div>
          <div className="max-w-md mx-auto mt-6">
            <p className="text-lg leading-relaxed text-black">
              ผลงานชิ้นนี้เป็นผลงานโปรเจคของ นาย วัฒนชัย ชุมพล จัดทำขึ้นเพื่อให้มีการพัฒนาและเรียนรู้เกี่ยวกับการใช้ Tailwind CSS, React JSX, ฐานข้อมูล Backend และ Frontend เรื่องและชื่อของ Blue Service Hotel เป็นเรื่องสมมุติขึ้น หากมีข้อผิดพลาดใดๆ ขออภัยมา ณ ที่นี้ด้วย ขอบคุณครับ
            </p>
          </div>
        </div>
      </div>
      {/* ติดต่อเรา */}

      <div class="bg-slate-600 py-10 mt-7">
        <div class="container mx-auto">
          <div class="text-center flex items-center justify-center text-5xl">
            <p class="text-white">ติดต่อเรา</p>
          </div>
          <div class="max-w-md mx-auto mt-6 text-center">
            <p class="text-lg leading-relaxed text-white">
              <a href="https://www.facebook.com/profile.php?id=100011246714224" target="_blank" rel="noopener noreferrer" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                <span class="flex items-center">
                  Facebook
                </span>
              </a>
            </p>
          </div>
          <div class="max-w-md mx-auto mt-6 flex items-center justify-center ">
            <p class="text-lg leading-relaxed text-white">
              <a href="https://www.instagram.com/wc_cp1931/" target="_blank" rel="noopener noreferrer">
                <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1" />
              </a>
            </p>
          </div>

          <div className="max-w-md mx-auto mt-6 flex items-center justify-center">
            <p className="text-lg leading-relaxed text-white">
              <a href="https://github.com/wattanachaipoo" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
        </div>
      </div>


    </div>
  );
}
