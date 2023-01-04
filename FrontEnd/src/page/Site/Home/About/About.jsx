const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="http://winchair.vn/wp-content/uploads/2019/06/B%E1%BB%99-b%C3%A0n-%C4%83n-4-gh%E1%BA%BF-Dexer-hi%E1%BB%87n-%C4%91%E1%BA%A1i-CB008.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://caotoanphat.com/wp-content/uploads/2022/06/ban-concorde-6-ghe-hien-dai.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://caotoanphat.com/wp-content/uploads/2022/04/bo-ban-an-4-ghe-hien-dai.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://noithatthanhduong.com/wp-content/uploads/2022/02/ghe-van-phong-ban-lam-viec-van-phong-son-la-1.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bàn ghế hiện đại số 1 Việt Nam
          </h2>
          <p className="mt-4 text-gray-500">
            Chiếc bàn ăn mặt đá hiện đại này sở hữu thiết kế đầy sự tinh giản
            trong thiết kế. Với phần khung sắt được sơn tĩnh điện cao cấp. Gia
            chủ sẽ không bao giờ phải lo lắng về tình trạng rỉ sét khi tiếp xúc
            với môi trường ẩm, dầu mỡ. Phần chân bàn được bo tròn và tinh giản
            một cách hết sức tối đa. Cách thiết kế này sẽ làm tăng cảm giác rộng
            rãi cho toàn bộ căn phòng. Đồng thời còn hạn chế sự va chạm với trẻ
            nhỏ nhờ độ cao lên đến 75 cm.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
