import { useState } from 'react';
import { PillRecord } from '../components/Smartphone/Calendar/types';

const usePillRecords = (initialRecords: PillRecord[]) => {
  const [pillRecords, setPillRecords] = useState<PillRecord[]>(initialRecords);
  
  const addOrUpdateRecord = (record: PillRecord) => {
    setPillRecords(prev => {
      const filtered = prev.filter(r => r.date !== record.date);
      return [...filtered, record];
    });
  };
  
  const getRecordByDate = (date: string) => {
    return pillRecords.find(record => record.date === date);
  };
  
  return {
    pillRecords,
    addOrUpdateRecord,
    getRecordByDate
  };
};

export default usePillRecords;