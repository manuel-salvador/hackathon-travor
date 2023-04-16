import MapView from "@/components/MapView";
import SearchBar from "@/components/SearchBar";

import ScreenLayout from "./layouts/ScreenLayout";

export default function Home() {
  return (
    <ScreenLayout>
      <SearchBar />
      <MapView />
    </ScreenLayout>
  );
}
