import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import './styles.scss';

export const PrincipalBanner = () => {
  const { t } = useTranslation();

  const T_ROOT_B1 = 'banners.banner-1';
  const T_ROOT_B2 = 'banners.banner-2';
  const T_ROOT_B3 = 'banners.banner-3';
  const T_ROOT_B4 = 'banners.banner-4';

  return (
    <section
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="App__ContainerBanner-1">
            <div className="App__ContainerBanner--Title">
              {t(`${T_ROOT_B1}.title`)}
              <div className="App__ContainerBanner--Subtitle">
                <Trans
                  i18nKey={t(`${T_ROOT_B1}.subtitle`)}
                  components={{ italic: <i /> }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="App__ContainerBanner-2">
            <div className="App__ContainerBanner--Title">
              {t(`${T_ROOT_B2}.title`)}
              <div className="App__ContainerBanner--Subtitle">
                <Trans
                  i18nKey={t(`${T_ROOT_B2}.subtitle`)}
                  components={{ italic: <i /> }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="App__ContainerBanner-3">
            <div className="App__ContainerBanner--Title">
              {t(`${T_ROOT_B3}.title`)}
              <div className="App__ContainerBanner--Subtitle">
                <Trans
                  i18nKey={t(`${T_ROOT_B3}.subtitle`)}
                  components={{ italic: <i /> }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </section>
  );
};
