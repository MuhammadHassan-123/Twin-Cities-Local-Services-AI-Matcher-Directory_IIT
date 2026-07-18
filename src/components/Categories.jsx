import "./Categories.css";
import CategoryCard from "./CategoryCard";

function Categories() {

  const categories = [

    {
      icon:"🔧",
      title:"Plumber"
    },

    {
      icon:"⚡",
      title:"Electrician"
    },

    {
      icon:"📚",
      title:"Tutor"
    },

    {
      icon:"🧹",
      title:"Cleaner"
    },

    {
      icon:"❄",
      title:"AC Technician"
    },

    {
      icon:"🎨",
      title:"Painter"
    }

  ];

  return (

    <section className="categories">

      <h2>Popular Categories</h2>

      <p>
        Choose the service you need and find trusted professionals nearby.
      </p>

      <div className="category-grid">

        {categories.map((item,index)=>(

          <CategoryCard
            key={index}
            icon={item.icon}
            title={item.title}
          />

        ))}

      </div>

    </section>

  );

}

export default Categories;