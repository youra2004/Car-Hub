import { Hero, ShowMore } from "@/components";
import { SearchBar } from "@/components";
import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }: any) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacture || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
      </div>

      <div className="home__cars-wrapper">
        {allCars?.map((car: any) => (
          <CarCard car={car} key={JSON.stringify(car)} />
        ))}
      </div>
      <ShowMore pageNumber={(searchParams.limit || 10) / 10} />
    </main>
  );
}
