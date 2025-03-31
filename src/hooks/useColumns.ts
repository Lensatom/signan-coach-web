import { getStoredData, handleStoreData } from "@/helpers";
import { useEffect, useState } from "react";

interface UseColumnsType {
  initialValues: any,
  storeKey: string
}

export function useColumns({
  initialValues,
  storeKey
}:UseColumnsType) {
  const [columns, setColumns] = useState(initialValues)
  const activeColumns = columns.filter((column:any) => column.active === true)

  useEffect(() => {
    const storedData = getStoredData(storeKey)
    if (storedData !== null) {
      setColumns(storedData)
    }
  }, [])

  // useEffect(() => {
  // }, [columns])
  
  const toggleColumn = (index:number) => {
    const tempColumns = columns
    tempColumns[index].active = !tempColumns[index].active
    setColumns([...tempColumns])
    handleStoreData(storeKey, tempColumns)
  }

  return {
    columns,
    toggleColumn,
    activeColumns
  }
}