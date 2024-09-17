function ModalLoader() {
  return (
    <div
      className="absolute left-0 top-0 right-0 bottom-0 bg-[#00000085] z-[100]
    flex items-center justify-center"
    >
      <span
        style={{
          borderTop: "3px solid rgb(255, 255, 255)",
          width: "7rem",
          height: "7rem",
        }}
        className="loader2"
      ></span>
    </div>
  );
}

export default ModalLoader;
