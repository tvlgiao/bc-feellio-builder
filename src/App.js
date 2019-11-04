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
import FeellioPetsBrands from './FeellioPetsBrands';
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
        <FeellioUnderwearBrands title="Feellio Underwear Brand Section" sectionKey="underwear-brands" />,
        <FeellioUnderwearBanner title="Feellio Underwear Banner Section" sectionKey="underwear-banner" />,
        <FeellioUnderwearCatalogue title="Feellio Underwear Catalogue Section" sectionKey="underwear-catalogue" />,
        <FeellioUnderwearVideo title="Feellio Underwear Video Section" sectionKey="underwear-video" />,
        <FeellioFlowersAboutUs title="Feellio Flowers About Us Section" sectionKey="flowers-about-us" />,
        <FeellioFlowersBannerParallax title="Feellio Flowers Banner Parallax Section" sectionKey="flowers-banner-parallax" />,
        <FeellioFlowersTestimonial title="Feellio Flowers Testimonial Section" sectionKey="flowers-testimonial" />,
        <FeellioFlowersTwoBanner title="Feellio Flowers Banner Two Section" sectionKey="flowers-banner-two" />,
        <FeellioFlowersFiveBanner title="Feellio Flowers Five Banner Section" sectionKey="flowers-banner" />,
        <FeellioFlowersContactInfo title="Feellio Flowers Contact Info Section" sectionKey="flowers-contact-info" />,
        <FeellioPetsAboutUs title="Feellio Pets About Us Section" sectionKey="pets-about-us" />,
        <FeellioPetsInformation title="Feellio Pets Information Section" sectionKey="pets-information" />,
        <FeellioPetsOurWork title="Feellio Pets Our Work Section" sectionKey="pets-our-work" />,
        <FeellioPetsOurProfessionals title="Feellio Pets Our Professionals Section" sectionKey="pets-our-professionals" />,
        <FeellioPetsContact title="Feellio Pets Contact Section" sectionKey="pets-contact" />,
        <FeellioPetsBanner title="Feellio Pets Banner Section" sectionKey="pets-banner" />,
        <FeellioPetsBrands title="Feellio Pets Brands Section" sectionKey="pets-brands" />,
        <FeellioFurnitureProductOne title="Feellio Furniture Product 1 Section" sectionKey="furniture-product-1" />,
        <FeellioFurnitureProductTwo title="Feellio Furniture Product 2 Section" sectionKey="furniture-product-2" />,
        <FeellioFurnitureFeatured title="Feellio Furniture Featured Section" sectionKey="furniture-featured" />,
        <FeellioFurnitureProductNew title="Feellio Furniture Product New Section" sectionKey="furniture-product-new" />,
        <FeellioFurnitureBannerDeal title="Feellio Furniture Banner Deal Section" sectionKey="furniture-banner-deal" />,
        <FeellioFurnitureBannerVideo title="Feellio Furniture Banner Video Section" sectionKey="furniture-banner-video" />,
        <FeellioFashionBannerOne title="Feellio Fashion Banner Section" sectionKey="fashion-banner"/>,
        <FeellioFashionBannerProductSlider title="Feellio Fashion Banner Product Slider Section" sectionKey="fashion-banner-product-slider" />,
        <FeellioFashionCatalogue title="Feellio Fashion Catalogue Section" sectionKey="fashion-catalogue" />,
        <FeellioFashionReview title="Feellio Fashion Review Section" sectionKey="fashion-review" />,
        <FeellioFashionBrands title="Feellio Fashion Brands Section" sectionKey="fashion-brands" />,
        <FeellioShoesBrands title="Feellio Shoes Brands Section" sectionKey="shoes-brands" />,
        <FeellioShoesFourBanner title="Feellio Shoes Four Banner Section" sectionKey="shoes-banner" />,
        <FeellioShoesBannerInfoOne title="Feellio Shoes Banner Info One Section" sectionKey="shoes-banner-info-1" />,
        <FeellioShoesBannerInfoTwo title="Feellio Shoes Banner Info Two Section" sectionKey="shoes-banner-info-2" />,
        <FeellioShoesNewsletter title="Feellio Shoes Newsletter Section" sectionKey="shoes-newsletter" />,
        <FeellioShoesReviewsInstagrams title="Feellio Shoes Reviews Instagrams Section" sectionKey="shoes-reviews-instagrams" />,
        <FeellioCustomPageStoreLocator title="Feellio Custom Page Store Locator Section" sectionKey="Use for page don't have section key" />
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
