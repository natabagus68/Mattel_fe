export const AccountDetail = () => {
  return (
    <>
      <div className="pb-9 bg-white-lightest rounded-lg shadow-[0_0_24px_rgba(12,47,57,0.08)]">
        <div className="px-12 py-6 bg-sky-lightest border-sky-light rounded-t-lg">
          <div className="text-2xl text-gray-foundation-800 font-semibold">
            Details
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-cols-2">
            <div className="w-[481px] h-[400px]">
              <div className="p-6">
                <div className="text-lg text-[#1A5130] font-medium">
                  Biodata User
                </div>
                <div className="mt-[37px] w-[442px]">
                  <div className=" bg-gray-50 py-[7px] px-[16px] grid grid-cols-2 gap-160">
                    <div className="text-ink-darker font-medium">Name</div>
                    <div className="text-gray-foundation-400">Kurnia</div>
                  </div>
                  <div className=" py-[7px] px-[16px] grid grid-cols-2 gap-160">
                    <div className="text-ink-darker font-medium">Email</div>
                    <div className="text-gray-foundation-400">
                      Kurnia@gmail.com
                    </div>
                  </div>
                  <div className=" bg-gray-50 py-[7px] px-[16px] grid grid-cols-2 gap-160">
                    <div className="text-ink-darker font-medium">Position</div>
                    <div className="text-gray-foundation-400">
                      Branch Manager
                    </div>
                  </div>
                  <div className="py-[7px] px-[16px] grid grid-cols-2 gap-160">
                    <div className="text-ink-darker font-medium">Role</div>
                    <div className="text-gray-foundation-400">Superadmin</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[481px] h-[400px]">
              <div className="p-6">
                <div className="text-lg text-[#1A5130] font-medium">
                  Profile Photo
                </div>
                <div className="mt-[37px] w-[442px] flex items-center justify-center">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JQIfP3ry7ZQ99SN2zQsSqwHaHa%26pid%3DApi&f=1&ipt=74c6c1ac4e878ed2c3897975f7334d253674a58dbde4364115b068377a8192ea&ipo=images"
                    className="w-[226px] h-[226px] rounded-[113px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
