import { createApi } from "unsplash-js";

const unsplash = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

export const getCafeStore = async (lines, value) => {
    const photo = await unsplash.search.getPhotos({
        query: "coffee store",
        perPage: 20,
    });
    const PhotoResponse = photo.response.results;
    const FinalPhoto = PhotoResponse.map((element, index) => {
        return element.urls.small;
    });

    const handlerlines = () => {
        if (!value) {
            return lines;
        }
        return "40.67,-73.95";
    };

    let url = `https://api.foursquare.com/v3/places/search?ll=${handlerlines()}&query=coffee&limit=20&client_id=${process.env.NEXT_PUBLIC_CLEINT_ID
        }&client_secret=${process.env.NEXT_PUBLIC_CLEINT_SECRET}&v=20230930`;

    let top = {
        Authorization: `fsq3vmrnixEH2Vp30pFPR73O0irqH6hpYb7d8j2ULcgIQRI=`,
        accept: "application/json",
    };

    const response = await fetch(url, { cache: "default", headers: top });

    const defaultData = await response.json();

    const containerFullData = defaultData.results.map((element, index) => {
        return {
            data: element,
            image: FinalPhoto[index],
        };
    });

    return containerFullData;
};
