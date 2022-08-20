import emailjs from 'emailjs-com'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const ContactInfoComponent = () => {

    const sendEmail = (e: any) => {
      e.preventDefault();

      const ress = emailjs.sendForm('service_f16k2sb', 'template_pi8m2mr', e.target, 'petDaFJ3PZdw1JVc1').then(res=> {
        swal("Sukses", "Pesan sudah terkirim, mohon tunggu balasan dari Hamdani Terimakasih", "success");
        e.target.reset();
      }).catch(err=> console.log(err));
    }

    return (
      <section className="site-section darken-bg" id="section-contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-white mb-5 heading">Kontak</h2>

                <form onSubmit={sendEmail}>
                  <div className="row form-group">
                    <div className="col-md-12 mb-3 mb-md-0">
                      <label className="text-white">Nama</label>
                      <input type="text" id="name" name="name" required className="form-control" placeholder="Masukan Nama Kamu" />
                    </div>
                  </div>

                  <div className="row form-group">
                    
                    <div className="col-md-12">
                      <label className="text-white">Email</label> 
                      <input type="email" id="email" name="email" required className="form-control" placeholder="Masukan Email Kamu" />
                    </div>
                  </div>

                  <div className="row form-group">
                    
                    <div className="col-md-12">
                      <label className="text-white">Subject</label> 
                      <input type="subject" id="subject" name="subject" required className="form-control" placeholder="Masukan Subject" />
                    </div>
                  </div>

                  <div className="row form-group mb-5">
                    <div className="col-md-12">
                      <label className="text-white">Pesan</label> 
                      <textarea name="message" id="message" className="form-control" required placeholder="Ketikan sesuatu disini..."></textarea>
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <input type="submit" value="Kirim Pesan" className="btn btn-primary btn-md text-white" />
                    </div>
                  </div>
                </form>
          </div>
        </div>
      </div>
      <div className="col-md-12 text-center">
          <p data-aos="fade-up" data-aos-delay="100">
              <Link to="/" className="btn btn-primary btn-md smoothscroll">Back To Home</Link>
          </p>
      </div>
    </section>

    );
}
export default ContactInfoComponent;