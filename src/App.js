import React from 'react';
import './App.css';
import FeellioUnderwearBrands from './FeellioUnderwearBrands';
import FeellioUnderwearBanner from './FeellioUnderwearBanner';
import FeellioUnderwearCatalogue from './FeellioUnderwearCatalogue';
import FeellioUnderwearVideo from './FeellioUnderwearVideo';
import FeellioFlowersAboutUs from './FeellioFlowersAboutUs';
import FeellioFlowersBannerParallax from './FeellioFlowersBannerParallax';
import FeellioFlowersTwoBanner from './FeellioFlowersTwoBanner';
import FeellioFlowersFiveBanner from './FeellioFlowersFiveBanner';
import FeellioFlowersContactInfo from './FeellioFlowersContactInfo';
import FeellioPetsAboutUs from './FeellioPetsAboutUs';
import FeellioPetsInformation from './FeellioPetsInformation';
import FeellioPetsOurWork from './FeellioPetsOurWork';
import FeellioPetsOurProfessionals from './FeellioPetsOurProfessionals';
import FeellioPetsContact from './FeellioPetsContact';
import FeellioPetsBanner from './FeellioPetsBanner';
import FeellioFurnitureProductOne from './FeellioFurnitureProductOne';
import FeellioFurnitureProductTwo from './FeellioFurnitureProductTwo';
import FeellioFurnitureFeatured from './FeellioFurnitureFeatured';
import FeellioFurnitureProductNew from './FeellioFurnitureProductNew';
import FeellioFurnitureBannerDeal from './FeellioFurnitureBannerDeal';
import FeellioFurnitureBannerVideo from './FeellioFurnitureBannerVideo';
import FeellioFashionBannerOne from './FeellioFashionBannerOne';
import FeellioFashionBannerProductSlider from './FeellioFashionBannerProductSlider';
import FeellioFashionCatalogue from './FeellioFashionCatalogue';
import FeellioFashionReview from './FeellioFashionReview';
import FeellioFashionBrands from './FeellioFashionBrands';
import FeellioShoesBrands from './FeellioShoesBrands';
import FeellioShoesFourBanner from './FeellioShoesFourBanner';
import FeellioShoesBannerInfoOne from './FeellioShoesBannerInfoOne';
import FeellioShoesBannerInfoTwo from './FeellioShoesBannerInfoTwo';
import FeellioShoesNewsletter from './FeellioShoesNewsletter';
import FeellioShoesReviewsInstagrams from './FeellioShoesReviewsInstagrams';
import FeellioCustomPageStoreLocator from './FeellioCustomPageStoreLocator';
import FeellioFlowersTestimonial from './FeellioFlowersTestimonial';
function App() {
    const tabs = [
        <FeellioUnderwearBrands title="Feellio Underwear Brand Section" />,
        <FeellioUnderwearBanner title="Feellio Underwear Banner Section" />,
        <FeellioUnderwearCatalogue title="Feellio Underwear Catalogue Section" />,
        <FeellioUnderwearVideo title="Feellio Underwear Video Section" />,
        <FeellioFlowersAboutUs title="Feellio Flowers About Us Section" />,
        <FeellioFlowersBannerParallax title="Feellio Flowers Banner Parallax Section" />,
        <FeellioFlowersTestimonial title="Feellio Flowers Testimonial Section" />,
        <FeellioFlowersTwoBanner title="Feellio Flowers Banner Two Section" />,
        <FeellioFlowersFiveBanner title="Feellio Flowers Five Banner Section" />,
        <FeellioFlowersContactInfo title="Feellio Flowers Contact Info Section" />,
        <FeellioPetsAboutUs title="Feellio Pets About Us Section"/>,
        <FeellioPetsInformation title="Feellio Pets Information Section"/>,
        <FeellioPetsOurWork title="Feellio Pets Our Work Section"/>,
        <FeellioPetsOurProfessionals title="Feellio Pets Our Professionals Section"/>,
        <FeellioPetsContact title="Feellio Pets Contact Section"/>,
        <FeellioPetsBanner title="Feellio Pets Banner Section"/>,
        <FeellioFurnitureProductOne title="Feellio Furniture Product 1 Section"/>,
        <FeellioFurnitureProductTwo title="Feellio Furniture Product 2 Section"/>,
        <FeellioFurnitureFeatured title="Feellio Furniture Featured Section"/>,
        <FeellioFurnitureProductNew title="Feellio Furniture Product New Section"/>,
        <FeellioFurnitureBannerDeal title="Feellio Furniture Banner Deal Section" />,
        <FeellioFurnitureBannerVideo title="Feellio Furniture Banner Video Section" />,
        <FeellioFashionBannerOne title="Feellio Fashion Banner Section"/>,
        <FeellioFashionBannerProductSlider title="Feellio Fashion Banner Product Slider Section" />,
        <FeellioFashionCatalogue title="Feellio Fashion Catalogue Section" />,
        <FeellioFashionReview title="Feellio Fashion Review Section" />,
        <FeellioFashionBrands title="Feellio Fashion Brands Section" />,
        <FeellioShoesBrands title="Feellio Shoes Brands Section" />,
        <FeellioShoesFourBanner title="Feellio Shoes Four Banner Section" />,
        <FeellioShoesBannerInfoOne title="Feellio Shoes Banner Info One Section" />,
        <FeellioShoesBannerInfoTwo title="Feellio Shoes Banner Info Two Section" />,
        <FeellioShoesNewsletter title="Feellio Shoes Newsletter Section" />,
        <FeellioShoesReviewsInstagrams title="Feellio Shoes Reviews Instagrams Section" />,
        <FeellioCustomPageStoreLocator title="Feellio Custom Page Store Locator Section" />
    ];

    return (
        <div className="App">
            <div className="container-fuild">
                <div className="row App-row">
                    <div className="col-md-auto App-col-sidebar">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {tabs.map((el, i) =>
                                <a key={i} className={`nav-link ${i === 0 ? 'active' : ''}`} id={`v-pills-${i}-tab`} data-toggle="pill" href={`#v-pills-${i}`} role="tab" aria-controls={`v-pills-${i}`} aria-selected={i === 0 ? 'true' : 'false'}>{el.props.title}</a>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <div className="tab-content" id="v-pills-tabContent">
                            {tabs.map((el, i) =>
                                <div key={i} className={`tab-pane fade ${i === 0 ? 'show active' : ''}`} id={`v-pills-${i}`} role="tabpanel" aria-labelledby={`v-pills-${i}-tab`}>
                                    {el}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
