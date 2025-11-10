import { client } from './member';

// 컨설턴트 정보 타입
export interface AssignedConsultant {
  id: string;
  full_name: string;
  status: 'ACTIVE' | 'INACTIVE' | string;
  is_active: boolean;
}

// 컨설팅 상태 타입
export type ConsultStatus = 'UPLOADED' | 'PROCESSING' | 'COMPLETED' | string;

// 컨설팅 목록 항목 타입
export interface ConsultItem {
  id: string;
  student_name: string;
  status: ConsultStatus;
  assigned_consultant: AssignedConsultant | null;
  created_at: string;
  updated_at: string;
}

export const getConsultList = async (): Promise<{ data: ConsultItem[] }> => {
  return await client.get('/api/v1/consult/list');
};
