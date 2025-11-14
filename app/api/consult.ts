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
// 컨설팅 목록 조회
export const getConsultList = async (): Promise<{ data: ConsultItem[] }> => {
  return await client.get('/api/v1/consult/list');
};
// 학교 정보 타입
export interface SchoolItem {
  id: string;
  name: string;
}

export interface PostConsultSchoolData {
  name: string;
  is_active: boolean;
}
export interface MajorItem {
  id: string;
  name: string;
}
export interface PostConsultMajorData {
  name: string;
  is_active: boolean;
}
export interface PostMockExamData {
  desired_university: string;
  desired_department: string;
  scores: {
    korean: {
      subject: string;
      standard_score: number;
      percentile: number;
      grade: number;
    };
    korean_history: {
      subject: string;
      standard_score: number;
      percentile: number;
      grade: number;
    };
    math: {
      subject: string;
      standard_score: number;
      percentile: number;
      grade: number;
    };
    english: {
      subject: string;
      standard_score: number;
      percentile: number;
      grade: number;
    };
    inquiry1: {
      subject: string;
      standard_score: number;
      percentile: number;
      grade: number;
    };
    inquiry2: {
      subject: string;
      standard_score: number;
      percentile: number;
      grade: number;
    };
    second_language: {
      subject: string;
      standard_score: number;
      percentile: number;
      grade: number;
    };
  };
}

// 문서 타입
export type DocumentType = 'ORIGINAL' | string;

// 문서 정보 타입
export interface ConsultDocument {
  id: string;
  document_type: DocumentType;
  s3_key: string;
  file_name: string;
  content_type: string;
  file_size: number;
  uploaded_by_consultant_id: string | null;
  created_at: string;
  updated_at: string;
}

// 리뷰 로그 액션 타입
export type ReviewLogAction = 'LOCK' | string;

// 리뷰 로그 타입
export interface ReviewLog {
  id: string;
  consultant_id: string | null;
  action: ReviewLogAction;
  payload: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

// 컨설팅 상세 정보 타입
export interface ConsultDetail {
  id: string;
  student_name: string;
  file_name: string;
  status: ConsultStatus;
  uploaded_by_user_id: string | null;
  assigned_consultant_id: string | null;
  original_file_s3_key: string | null;
  final_report_s3_key: string | null;
  analysis_version: string | null;
  analysis_snapshot: Record<string, unknown> | null;
  raw_text: Record<string, unknown> | null;
  processed_data: Record<string, unknown> | null;
  attachments: Record<string, unknown> | null;
  additional_metadata: Record<string, unknown> | null;
  consultant_draft: Record<string, unknown> | null;
  review_locked_by_id: string | null;
  review_locked_at: string | null;
  created_at: string;
  updated_at: string;
  documents: ConsultDocument[];
  review_logs: ReviewLog[];
}

// 파싱 콜백 응답 타입
export interface DoclingCallbackResponse {
  recordId: string;
  payload: Record<string, unknown>;
  error?: string;
}

// 컨설팅 학교 조회
export const getConsultSchool = async (): Promise<{ data: SchoolItem[] }> => {
  return await client.get('/api/v1/universities');
};
// 컨설팅 학교 등록
export const postConsultSchool = async (
  data: PostConsultSchoolData
): Promise<{ data: SchoolItem }> => {
  return await client.post('/api/v1/universities', data);
};
// 컨설팅 학과 조회
export const getConsultMajor = async (
  university_ids: string[]
): Promise<{ data: MajorItem[] }> => {
  const queryParams = university_ids
    .map((id) => `university_ids=${encodeURIComponent(id)}`)
    .join('&');
  return await client.get(`/api/v1/universities/departments?${queryParams}`);
};
// 컨설팅 학과 등록
export const postConsultMajor = async (
  university_id: string,
  data: PostConsultMajorData
): Promise<{ data: MajorItem }> => {
  return await client.post(
    `/api/v1/universities/${university_id}/departments`,
    data
  );
};

//희망대학 모의고사 등록
export const postMockExam = async (data: PostMockExamData) => {
  return await client.post('/api/v1/user/mock-exam', data);
};

//컨설팅 신청 접수
export const postConsultApply = async (data: FormData) => {
  return await client.post('/api/v1/consult/apply', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 컨설팅 상세 조회
export const getConsultDetail = async (
  id: string
): Promise<{ data: ConsultDetail }> => {
  return await client.get(`/api/v1/consult/${id}`);
};

//파싱후 콜백
export const postDoclingCallback = async (data: DoclingCallbackResponse) => {
  return await client.post('/api/v1/consult/docling/callback', data);
};

// 컨설팅 처리 현황
export const getConsultProcessingStatus = async (id: string) => {
  return await client.get(`/api/v1/consult/${id}/status`);
};

//희망대학 모의고사 등록 put
export const putMockExam = async (data: PostMockExamData) => {
  return await client.put(`/api/v1/user/mock-exam`, data);
};

//컨설팅 신청 취소
export const postConsultCancel = async (id: string) => {
  return await client.post(`/api/v1/consult/${id}/cancel`);
};
