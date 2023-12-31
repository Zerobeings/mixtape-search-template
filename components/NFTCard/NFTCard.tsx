import styles from './NFTCard.module.css';
import Image from 'next/image';
import { MediaRenderer } from "@thirdweb-dev/react";
import { useEffect, useState } from 'react';

interface Props {
  nft: any;
  network: string;
}

interface Attribute {
  trait_type: string;
  value: string;
}

export default function NFTCard({ nft, network }: Props) {

  const handleAttributeClick = (attribute: string) => {
    console.log("attribute", attribute);
    //TODO: add search functionality
  }

  return (
    <>
    {nft?.metadata?.name !== "Failed to load NFT metadata" &&
      <div className={styles.container}>
        <div className={styles.item}>
          <h4 className={styles.heading}>{nft.name || nft?.metadata?.name}</h4>
          <MediaRenderer src={nft.image} alt="image" height="233px" width="233px" />
          <table className={styles.table}>
            <tbody>
            {nft.attributes && (
              Object.entries(nft.attributes).map(([key, value], i) => {
                return (
                  <tr key={i} onClick={() => handleAttributeClick(`"${key}" = "${String(value)}"`)}>
                      <td>{key}</td>
                      <td>{String(value)}</td>
                  </tr>
                );
              })
            )}
            </tbody>
          </table>
        </div>
      </div>
    }
    </>
  );
}
