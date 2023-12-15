

const MiniContact = () => {
  return (
    <div className="w-full h-full" style={{ background: 'linear-gradient(to left, #071952, #000000)' }}>
      <div className="11/12 mx-auto justify-between items-center text-center text-white">
        <h1 className="text-5xl  py-10">How can we help you?</h1>
        <p className="pb-10 text-xl">
          <a className="border-b border-blue-400" href="mailto:your-email@example.com">Get in touch</a> with us or <a className="border-b border-blue-400" href="mailto:your-email@example.com">find an office</a> closest to you.
        </p>
      </div>
    </div>
  );
};

export default MiniContact;