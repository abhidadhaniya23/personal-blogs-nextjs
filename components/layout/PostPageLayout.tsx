const PostPageLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <div className="grid grid-cols-10">
        <div className="col-span-3"></div>
        <div className="col-span-7 p-7 border-l-[1px] border-solid border-white/10">
          {children}
        </div>
      </div>
    </>
  );
};

export default PostPageLayout;
