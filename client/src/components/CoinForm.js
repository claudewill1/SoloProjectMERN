import React, { useState } from "react";
import { Link } from "react-router-dom";
const CoinForm = (props) => {
  const {
    initialCoinType,
    initialDenomination,
    initialValue,
    initialDescription,
    initialGraded,
    initialGradingService,
    initialCertificationNumber,
    onSubmitProp,
  } = props;
  const [coinType, setCoinType] = useState(initialCoinType);
  const [denomination, setDenomination] = useState(initialDenomination);
  const [value, setValue] = useState(initialValue);
  const [description, setDescription] = useState(initialDescription);
  const [graded, setGraded] = useState(initialGraded);
  const [gradingService, setGradingService] = useState(initialGradingService);
  // const [certificationNumber,setCer]
};
