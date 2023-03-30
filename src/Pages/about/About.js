import box from "../../components/images/box.jpeg";

function About() {
  return (
    <section>
      <div className="about-page pt-5 pb-5 border-top ">
        <div className="container">
          <div class="card mb-3" style={{ maxwidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4 d-flex">
                <img src={box} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">About plus one</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus eaque, distinctio deserunt natus, quaerat iure
                    quos repellendus accusantium odit quidem fuga asperiores
                    maxime ipsa culpa magni impedit dolore autem voluptate!.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus eaque, distinctio deserunt natus, quaerat iure
                    quos repellendus accusantium odit quidem fuga asperiores
                    maxime ipsa culpa magni impedit dolore autem voluptate!.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
