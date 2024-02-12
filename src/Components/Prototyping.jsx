export default function Prototyping() {
  return (
    <>
      <style>
        {`
        html{
            background-image: url('https://media.giphy.com/media/kcILLv8U4uR2gSrMIz/giphy.gif') !important;
        }

        h1 {
                background-color: red;
                color: white;
                font-size: 2em
            }
          p{
            color:red
          }`}
      </style>
      <div className="">
        <h1 className="fooDiv">Hello world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quam!
        </p>
      </div>
    </>
  );
}
