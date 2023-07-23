import { useState } from "react";
import { ScrollTop } from "../components";

const Contact = () => {
  // State
  const [fullNameText, setFullNameText] = useState("");
  const [emailText, setEmailText] = useState("");

  // Functions
  const clearInput = () => {
    setFullNameText("");
    setEmailText("");
  };
  const sendMessage = (e) => {
    e.preventDefault();

    const my_text = `New Message:%0A <b>- Full Name:</b> ${fullNameText} %0A <b>- Email:</b> ${emailText}`;

    const token = "6232775755:AAHlHNU25YBfrfyRq-tM29uhi9iLaAXMOGw";
    const chat_id = "-1001566721888";
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    clearInput();

    alert("Succesfuly Sent");
  };
  return (
    <>
      <div className="sm:px-16 px-6">
        <section className=" pt-[150px] sm:pt-[192px] pb-[48px] sm:pb-[96px]">
          <header className="flex flex-col items-center text-center mb-[64px] lg:mb-[96px]">
            <h1 className="header-text text-[32px] sm:text-[40px] lg:text-[64px] font-semibold mb-[16px] lg:mb-[24px] leading-[130%]">
              Contact Me
            </h1>
            <p className="w-[80%] lg:w-[60%] text-[16px] sm:text-[20px] lg:text-[24px] font-medium text-lightPrimary">
              Write to me if you have any questions, suggestions or would like
              to make an agreement. I will get back to you within 24/7
            </p>
          </header>
          <div className="content flex flex-col-reverse md:grid md:grid-cols-2 md:gap-10 lg:max-w-[1280px] mx-auto">
            <div className="info">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.720379055481!2d69.21696217493054!3d41.2783658556734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b310449d625%3A0xf64349a20d2355f!2sAzara!5e0!3m2!1sru!2s!4v1690128481622!5m2!1sru!2s"
                className="w-full mb-4 h-[400px] md:h-[300px]"
                loading="lazy"
              ></iframe>
              <div className="context flex flex-col gap-2">
                <p className="text-primaryColor underline">
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:995182901">(99) 518-29-01</a>
                </p>
                <p>
                  <span className="font-medium">Address:</span> Chilonzor,
                  Tashkent
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  behruzberdiyev518@gmail.com
                </p>
              </div>
            </div>
            <form className="mb-16" onSubmit={sendMessage} onReset={clearInput}>
              <div className="full-name text-[16px] font-medium text-blackish flex flex-col gap-4 mb-8">
                <label htmlFor="full-name">Full Name</label>
                <input
                  className="box-shadow text-[18px] py-3 px-3 outline-none"
                  type="text"
                  name="full-name"
                  value={fullNameText}
                  onChange={(e) => setFullNameText(e.target.value)}
                />
              </div>
              <div className="email text-[16px] font-medium text-blackish flex flex-col gap-4 mb-8">
                <label htmlFor="email">Email</label>
                <input
                  className="box-shadow text-[18px] py-3 px-3 outline-none"
                  placeholder="palonchiyev@example.com"
                  type="text"
                  name="email"
                  value={emailText}
                  onChange={(e) => setEmailText(e.target.value)}
                />
              </div>
              <div className="buttons flex gap-3">
                <input
                  className="bg-blackish transition-all hover:bg-primaryColor text-[white] px-6 py-4 sm:px-8 text-[14px] sm:text-[18px] font-semibold"
                  type="submit"
                  value="Send"
                />
                <input
                  className="bg-[white] transition-all hover:border-primaryColor hover:text-primaryColor text-blackish border-[2px] px-6 py-4 sm:px-8 text-[14px] sm:text-[18px] font-semibold"
                  type="reset"
                  value="Reset"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
      <ScrollTop />
    </>
  );
};

export default Contact;
