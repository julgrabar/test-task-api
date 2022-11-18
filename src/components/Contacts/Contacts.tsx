import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { FC } from "react";
import { IVacancy } from "types/types";
import locImg from "images/location.svg";
import styles from "./Contacts.module.css";

export const Contacts: FC<{ job: IVacancy }> = ({
  job: { name, phone, email, address, location },
}) => {
  const myIcon = L.icon({
    iconUrl: locImg,
  });
  return (
    <div className={styles.contactsWrapper}>
      <div className={styles.contactsInfo}>
        <span className="font-bold">{name}</span>
        <span>
          <img src={locImg} alt="address" className="inline" />
          {address}
        </span>
        <span>{phone}</span>
        <span>{email}</span>
      </div>
      <MapContainer
        center={[location.lat, location.long]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[218px] l:w-[402px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.long]} icon={myIcon} />
      </MapContainer>
    </div>
  );
};
