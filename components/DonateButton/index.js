const DonateButton = ({ message }) => {
  const onClick = () =>
    window.goatcounter.count({
      path: "donate",
      event: true,
    });
  return (
    <p className="mb-2 text-base text-gray-500">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://donate.stripe.com/6oE4hV8EjfY31O0cMM"
        className="font-bold text-blue-600 hover:text-blue-800"
        onClick={onClick}
      >
        {message}
      </a>
    </p>
  );
};

export default DonateButton;
