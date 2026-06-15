import AwardCard from './components/AwardCard';
import award01 from './assets/award01.png';
import award02 from './assets/award02.png';
import award03 from './assets/award03.png';
import award05 from './assets/award05.png';

const awards = [
  {
    imgUrl: award01,
    title: "Bib Gourmand",
    subtitle: "Lorem ipsum dolor sit amet, consectetur."
  },
  {
    imgUrl: award02,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur."
  },
  {
    imgUrl: award03,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur."
  },
  {
    imgUrl: award05,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur."
  }
];

function App() {
  return (
    <div className="bg-black min-h-screen p-12 flex justify-center items-center">
      <div className="w-full max-w-[400px] flex flex-col gap-4">
        {awards.map((award, index) => (
          <AwardCard
            key={award.title}
            imgUrl={award.imgUrl}
            title={award.title}
            subtitle={award.subtitle}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;