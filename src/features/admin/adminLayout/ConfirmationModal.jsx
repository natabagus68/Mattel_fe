export const ConfirmationModal = () => {
  return (
    <>
      <>
        <div
          className={`fixed bg-[#0000007d] opacity-50 z-20 w-full h-full`}
        ></div>
        <div
          className={`fixed inset-0 z-50 w-full h-full grid items-center justify-center`}
        >
          <div className="bg-white-lightest z-50 opacity-100 px-[39px] pb-[32px] rounded-[15px] flex flex-col items-center">
            <div className="font-medium text-ink-darker my-4">Confirmation</div>
            <div className="text-ink-base">
              Are you sure want to delete this data?
            </div>
            <div className="mt-[26px] flex gap-[16px]">
              <button className="rounded-[4px] bg-danger flex items-center justify-center px-3 py-2 text-white-lightest font-medium text-md">
                Yes
              </button>
              <button className="rounded-[4px] bg-success border border-neutral-500 flex items-center justify-center px-3 py-2 text-white-lightest font-medium text-md">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
