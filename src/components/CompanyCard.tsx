// components/CompanyCard.tsx

import React, { useState } from 'react';
import { ICompany } from '@/types/project';
import clasess from '../Styles/components/cardcompany.module.scss';
import UIButton from './UIButton';
import clasess2 from '../Styles/components/uibuttonforrating.module.scss';
interface ICompanyCard {
  company: ICompany;
}

const CompanyCard: React.FC<ICompanyCard> = ({ company }: ICompanyCard) => {
  const [likes, setLikes] = useState<number>(company.likes);
  const [dislikes, setDislikes] = useState<number>(company.dislikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const calculateRating = () => {
    const totalVotes = likes + dislikes;
    if (totalVotes === 0) return 0;
    return (likes / totalVotes) * 100;
  };

  return (
    <div className={clasess['Card']}>
      <h1>{company.company_name}</h1>
      <p className={clasess['Card__description']}>{company.company_desc}</p>
      <div className={clasess['Card__rating']}>
          <h1>👍</h1>
          <h1>👎</h1>
        
        
        <span>Рейтинг компании: {company.rating}</span>
      </div>
    </div>
  );
};

export default CompanyCard;
