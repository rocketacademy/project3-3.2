function ReviewBlock(props) {

  let { reviewer, rating, comment } = props

  return (
    <div className="flex flex-row gap-3 w-full m-2 ">
      <img
        src="https://i.pinimg.com/564x/88/73/2b/88732b46b8f5a2b0cfe8b3ef53e8809a.jpg"
        className="size-12 rounded-full object-cover object-center flex-shrink-0 flex-initial"
        alt=""
      />
      <div className="flex flex-col gap-2 w-full flex-1">
        <div className="flex flex-row gap-2 items-center">
          <h3 className="font-medium">Sung Jin-woo</h3>
          <p className="text-black/50 text-xs">9/10 ⭐</p>
        </div>
        <p className="text-sm">
          Really love her work! She managed to draw my D&D character the exact
          way I imagined him to be Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit, quibusdam?{" "}
        </p>
      </div>
    </div>
  );
}

export default ReviewBlock;